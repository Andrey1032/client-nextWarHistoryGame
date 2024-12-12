import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { authService } from "@/services/auth/auth.service";

import { IAuthForm } from "@/shared/types/auth.interface";
import { PUBLIC_URL } from "@/config/url.config";

export function useAuthForm(isReg?: boolean, refresh?: boolean) {
    const router = useRouter();
    const form = useForm<IAuthForm>({
        defaultValues: {
            login: "",
            password: "",
            repeat_password: "",
            email: "",
        },
        mode: "onSubmit",
    });

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        if (refresh) {
            return authService
                .main("refpass", data)
                .then(() =>
                    alert(
                        "На вашу почту было отправлено сообщение с дальнейшими указаниями!"
                    )
                )
                .catch(() =>
                    form.setError("apiError", {
                        type: "custom",
                        message:
                            "Ошибка восстановаления пароля, попробуйте позже.",
                    })
                );
        }

        if (isReg && data.password !== data.repeat_password) {
            return alert("Пароли не совпадают!");
        }

        return authService
            .main(isReg ? "registration" : "login", data)
            .then(() => router.push(PUBLIC_URL.home()))
            .catch((e) =>
                form.setError("apiError", {
                    type: "custom",
                    message: isReg
                        ? e?.response?.data?.message ||
                          "Ошибка регистрации, попробуйте позже!"
                        : "Не удалось авторизироваться, попробуйте позже!",
                })
            );
    };

    return { onSubmit, form, isSubmitting: form.formState.isSubmitting };
}
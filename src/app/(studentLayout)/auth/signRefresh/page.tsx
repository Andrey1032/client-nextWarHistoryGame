"use client";

import { AuthFields } from "../AuthFields";
import { useAuthForm } from "@/hooks/useAuthForm";
import Button from "@/components/ui/Form/form-elements/Button";
import { ErrorMessage } from "@hookform/error-message";

import style from "../auth.module.scss";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/api.config";
import { PulseLoader } from "react-spinners";

export default function Index() {
    const router = useRouter();
    const { onSubmit, form, isSubmitting } = useAuthForm(false, true);
    return (
        <div className={style.auth}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="form">
                <h1 className="form__title text text_font-36 text_w-500">
                    Восстановление пароля
                </h1>
                <AuthFields form={form} refresh />

                {isSubmitting && (
                    <div className="loader">
                        <PulseLoader color={"#171717"} />
                    </div>
                )}

                <ErrorMessage errors={form.formState.errors} name="apiError" />
                <div className="form__buttons">
                    <Button
                        disabled={isSubmitting}
                        className="button_1"
                        type="submit"
                        value="Восстановить пароль"
                        onClick={() => form.clearErrors("apiError")}
                    />
                    <Button
                        className="button_2"
                        type="button"
                        value="Войти в аккаунт"
                        onClick={() => router.push(API_URL.auth("/signIn"))}
                    />
                </div>
            </form>
        </div>
    );
}

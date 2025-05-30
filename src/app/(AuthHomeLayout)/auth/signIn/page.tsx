"use client";

import { AuthFields } from "../AuthFields";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/api.config";
import { useAuthForm } from "@/hooks/useAuthForm";
import Button from "@/components/ui/Form/form-elements/Button";
import { ErrorMessage } from "@hookform/error-message";

import style from "@/styles/Auth.module.scss";
import Loader from "@/components/Loader/Loader";

export default function Page() {
    const router = useRouter();
    const { onSubmit, form, isSubmitting } = useAuthForm();

    return (
        <div className={style.auth}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="form">
                <h1 className="form__title text text_size-36 text_w-500">
                    Вход в аккаунт
                </h1>
                <AuthFields form={form} isReg={false} />

                {isSubmitting && <Loader modal/>}

                <ErrorMessage errors={form.formState.errors} name="apiError" />
                <button
                    type="button"
                    className="form__button-notpass text text_cr text_size-16"
                    onClick={() => router.push(API_URL.auth("/signRefresh"))}
                >
                    Не помню пароль
                </button>

                <div className="form__buttons">
                    <Button
                        disabled={isSubmitting}
                        className="button_1"
                        type="submit"
                        value="Войти"
                        onClick={() => form.clearErrors("apiError")}
                    />
                    <Button
                        className="button_2"
                        type="button"
                        value="Зарегистрироваться"
                        onClick={() => router.push(API_URL.auth("/signUp"))}
                    />
                </div>
            </form>
        </div>
    );
}

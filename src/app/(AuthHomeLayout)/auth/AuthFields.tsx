import Input from "@/components/ui/Form/form-elements/Input";
import { IAuthForm } from "@/shared/interfaces/auth.interface";
import { Controller, UseFormReturn } from "react-hook-form";

interface AuthFieldsProps {
    form: UseFormReturn<IAuthForm, unknown, undefined>;
    isReg?: boolean;
    refresh?: boolean;
}

export function AuthFields({ form, isReg = false, refresh }: AuthFieldsProps) {
    if (refresh)
        return (
            <Controller
                control={form.control}
                name="email"
                rules={{
                    required: {
                        value: true,
                        message: "Заполните поле",
                    },
                }}
                render={({ field }) => (
                    <Input
                        field={field}
                        type="email"
                        placeholder="Введите почту для восстановления пароля..."
                        errors={form.formState.errors}
                        name={field.name}
                    />
                )}
            />
        );
    return (
        <>
            {isReg ? (
                <>
                    <Controller
                        control={form.control}
                        name="email"
                        rules={{
                            required: {
                                value: true,
                                message: "Заполните поле",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="email"
                                placeholder="Почта"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="login"
                        rules={{
                            required: {
                                value: true,
                                message: "Заполните поле",
                            },
                            minLength: {
                                value: 4,
                                message: "Минимальная длина логина 4 символа",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                placeholder="Логин"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="password"
                        rules={{
                            required: {
                                value: true,
                                message: "Заполните поле",
                            },
                            minLength: {
                                value: 4,
                                message: "Минимальная длина пароля 4 символа",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="password"
                                placeholder="Пароль"
                                autoComplete="new-password"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="repeat_password"
                        rules={{
                            required: {
                                value: true,
                                message: "Заполните поле",
                            },
                            minLength: {
                                value: 4,
                                message: "Минимальная длина пароля 4 символа",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="password"
                                placeholder="Повторите пароль"
                                autoComplete="new-password"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                </>
            ) : (
                <>
                    <Controller
                        control={form.control}
                        name="login"
                        rules={{
                            required: {
                                value: true,
                                message: "Заполните поле логина",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                placeholder="Логин"
                                autoComplete="username"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="password"
                        rules={{
                            required: {
                                value: true,
                                message: "Заполните поле пароля",
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                field={field}
                                type="password"
                                placeholder="Пароль"
                                autoComplete="current-password"
                                errors={form.formState.errors}
                                name={field.name}
                            />
                        )}
                    />
                </>
            )}
        </>
    );
}

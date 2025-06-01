"use client";

import Loader from "@/components/Loader/Loader";
import { useTopicForm } from "@/hooks/useTopicForm";
import style from "@/styles/TeacherPage.module.scss";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

export default function TopicAddForm({ exitMode }: { exitMode: () => void }) {
    const { onSubmit, form, isSubmitting } = useTopicForm();

    useEffect(() => {
        if (isSubmitting === true) exitMode();
    }, [onSubmit]);

    return (
        <div>
            {!isSubmitting ? (
                <>
                    <div className={style["teacher-page__modal-window"]}>
                        <h4>Форма добавления темы</h4>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className={style["teacher-page__form"]}
                        >
                            <Controller
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Название темы"
                                    />
                                )}
                            />

                            <div
                                className={style["teacher-page__form-buttons"]}
                            >
                                <button
                                    type="submit"
                                    className={`form-button hover-green`}
                                >
                                    добавить
                                </button>
                                <button
                                    type="button"
                                    onClick={() => exitMode()}
                                    className={`form-button hover-red`}
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

"use client";

import React from "react";
import style from "@/styles/TeacherPage.module.scss";
import { useSubtopicForm } from "@/hooks/useSubtopicForm";
import Loader from "@/components/Loader/Loader";
import { Controller } from "react-hook-form";

export default function SubtopicAddForm({
    id,
    exitMode,
}: {
    id: number;
    exitMode: () => void;
}) {
    const { onSubmit, form, isSubmitting } = useSubtopicForm({id, exitMode});

    return (
        <div className={style["teacher-page__modal-window"]}>
            {!isSubmitting ? (
                <>
                    <h4>Форма добавления подтемы</h4>
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
                        <div className={style["teacher-page__form-buttons"]}>
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
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

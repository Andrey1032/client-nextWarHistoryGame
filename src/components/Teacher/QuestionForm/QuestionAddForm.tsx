"use client";

import React, { useState } from "react";
import style from "@/styles/TeacherPage.module.scss";
import QuestionFields from "./QuestionFields";
import Loader from "@/components/Loader/Loader";
import { teacherService } from "@/services/teacher.service";

export default function QuestionAddForm({
    exitMode,
}: {
    exitMode: () => void;
}) {
    const [typeQuestion, setTypeQuestion] = useState<string | null>(null);
    const {
        data: dataTypeTasks,
        loading: loadingTypeTasks,
    }: {
        data: { getTypeTaskAll: { id: number; name: string }[] };
        loading: boolean;
    } = teacherService.getTypeTask();
    return (
        <div className={style["teacher-page__modal-window"]}>
            {!loadingTypeTasks ? (
                <>
                    <h4>Форма добавления вопроса</h4>
                    <form
                        onSubmit={() => {}}
                        className={style["teacher-page__form"]}
                    >
                        <input type="text" placeholder="Текст вопроса" />
                        <label>
                            Изображение к вопросу{" "}
                            <input
                                type="file"
                                placeholder="Изображение к вопросу"
                                name="img-question"
                            />
                        </label>
                        <select
                            name="type_question"
                            id="type_question"
                            defaultValue={0}
                        >
                            <option value="0" disabled>
                                Выберете тип задания
                            </option>
                            {dataTypeTasks?.getTypeTaskAll.map((typeTask) => (
                                <option key={typeTask.id} value={typeTask.id}>
                                    {typeTask.name}
                                </option>
                            ))}
                        </select>
                        <select
                            name="type_question-game"
                            id="type_question-game"
                            defaultValue={0}
                            onChange={(e) => setTypeQuestion(e.target.value)}
                        >
                            <option value="0" disabled>
                                Выберете тип мини-игры
                            </option>
                            <option value="Викторина">Викторина</option>
                            <option value="Сопоставление">Сопоставление</option>
                            <option value="Пропуск слова">Пропуск слова</option>
                        </select>

                        {typeQuestion && <QuestionFields />}

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

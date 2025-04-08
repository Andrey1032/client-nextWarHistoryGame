"use client";

import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";
import Topic from "@/components/Teacher/Topic/Topic";
import style from "@/styles/TeacherPractica.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [addTopic, setAddTopic] = useState(false);
    const topics = [
        { id: 0, title: "Начало ВОВ. Приграничные сражения", countQuestion: 0 },
        { id: 1, title: "Начало ВОВ. Приграничные сражения", countQuestion: 0 },
        { id: 2, title: "Начало ВОВ. Приграничные сражения", countQuestion: 0 },
        { id: 3, title: "Начало ВОВ. Приграничные сражения", countQuestion: 0 },
    ];

    return (
        <div className={style["teacher-practica"]}>
            <div className={style["teacher-practica__content"]}>
                <div className={`${style["teacher-practica__topic-header"]}`}>
                    <span
                        className={
                            style["teacher-practica__topic-header__title"]
                        }
                    >
                        Название темы
                    </span>
                    <span
                        className={
                            style["teacher-practica__topic-header__count"]
                        }
                    >
                        Кол-во вопросов
                    </span>
                    <span
                        className={
                            style["teacher-practica__topic-header__settings"]
                        }
                    >
                        Доступные функции
                    </span>
                </div>
                {topics?.map((topic) => (
                    <Topic key={topic.id} {...topic} />
                ))}

                <button
                    className={style["teacher-practica__add-topic"]}
                    onClick={() => setAddTopic(true)}
                >
                    <Image
                        className={style["icon-add-topic"]}
                        src={"/plus.svg"}
                        alt="+"
                        width={17}
                        height={17}
                    />
                    Добавить тему
                </button>
            </div>
            {addTopic && (
                <ModalWindowAdd>
                    <div className={style["teacher-practica__modal-window"]}>
                        <h4>Форма добавления темы</h4>
                        <form
                            onSubmit={() => {}}
                            className={style["teacher-practica__form"]}
                        >
                            <select
                                name="discipline"
                                id="discipline"
                                defaultValue={1}
                            >
                                <option value="1" disabled>
                                    Выберете дисциплину
                                </option>
                                <option value="2">Дисциплина 1</option>
                                <option value="3">Дисциплина 2</option>
                                <option value="4">Дисциплина 3</option>
                            </select>
                            <input type="text" placeholder="Название темы" />
                            <div
                                className={
                                    style["teacher-practica__form-buttons"]
                                }
                            >
                                <button type="submit" className="positive">
                                    добавить
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setAddTopic(false)}
                                    className="negative"
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </ModalWindowAdd>
            )}
        </div>
    );
}

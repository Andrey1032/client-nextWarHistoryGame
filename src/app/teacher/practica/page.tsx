"use client";

import Loader from "@/components/Loader/Loader";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";
import Topic from "@/components/Teacher/Topic/Topic";
import { topicService } from "@/services/teoria.service";
import { ITopicModel } from "@/shared/interfaces/topic.interface";
import style from "@/styles/TeacherPage.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [addTopic, setAddTopic] = useState(false);
    const {
        loading,
        data,
    }: { loading: boolean; data: { getTopicAll: ITopicModel[] } } =
        topicService.getTopicies();

    return (
        <div className={style["teacher-page"]}>
            <h2 className={style["teacher-page__title"]}>
                Практические задания по темам
            </h2>
            {!loading ? (
                <div className={style["teacher-page__content"]}>
                    <div className={`${style["teacher-page__topic-header"]}`}>
                        <span
                            className={
                                style["teacher-page__topic-header__title"]
                            }
                        >
                            Название темы
                        </span>
                        <span
                            className={
                                style["teacher-page__topic-header__count"]
                            }
                        >
                            Кол-во вопросов
                        </span>
                        <span
                            className={
                                style["teacher-page__topic-header__settings"]
                            }
                        >
                            Доступные функции
                        </span>
                    </div>
                    {data.getTopicAll?.map((topic) => (
                        <Topic key={topic.id} topic={topic} type="practica" />
                    ))}

                    <button
                        className={style["teacher-page__add-topic"]}
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
            ) : (
                <Loader />
            )}
            {addTopic && (
                <ModalWindowAdd>
                    <div className={style["teacher-page__modal-window"]}>
                        <h4>Форма добавления темы</h4>
                        <form
                            onSubmit={() => {}}
                            className={style["teacher-page__form"]}
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
                                className={style["teacher-page__form-buttons"]}
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

"use client";

import { topicService } from "@/services/teoria.service";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import style from "@/styles/TeacherPage.module.scss";
import Image from "next/image";
import Topic from "@/components/Teacher/Topic/Topic";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";
import Loader from "@/components/Loader/Loader";
import {
    ISubtopicModel,
    ITopicModel,
} from "@/shared/interfaces/topic.interface";
import { testSubtopicsData } from "../data";

export default function Page() {
    const router = useRouter();
    const { topic_id } = useParams();

    const [addTopic, setAddTopic] = useState(false);
    const {
        loading,
        data,
    }: {
        loading: boolean;
        data: { getTopicOne: ITopicModel };
    } = topicService.getOneTopic(Number(topic_id));

    const testSubtopics = testSubtopicsData(Number(topic_id));

    return (
        <div className={style["teacher-page"]}>
            {!loading ? (
                <>
                    <h4 className={style["teacher-page__title"]}>
                        <Image
                            className={style["teacher-page__button-back"]}
                            src="/open-arrow.svg"
                            alt="назад"
                            width={25}
                            height={25}
                            onClick={() => router.back()}
                        />{" "}
                        Выбрана тема &quot;
                        {data.getTopicOne.name}&quot;
                    </h4>
                    <div className={style["teacher-page__content"]}>
                        <div
                            className={`${style["teacher-page__topic-header"]}`}
                        >
                            <span
                                className={
                                    style["teacher-page__topic-header__title"]
                                }
                            >
                                Название подтемы
                            </span>
                            <span
                                className={
                                    style["teacher-page__topic-header__count"]
                                }
                            ></span>
                            <span
                                className={
                                    style[
                                        "teacher-page__topic-header__settings"
                                    ]
                                }
                            >
                                Доступные функции
                            </span>
                        </div>
                        {testSubtopics?.map((topic) => (
                            <Topic key={topic.id} topic={topic} type="teoria" />
                        ))}

                        <button
                            className={style["teacher-page__add-topic"]}
                            onClick={() => setAddTopic(true)}
                        >
                            <Image
                                src={"/plus.svg"}
                                alt="+"
                                width={17}
                                height={17}
                            />
                            Добавить подтему
                        </button>
                    </div>
                </>
            ) : (
                <Loader />
            )}
            {addTopic && (
                <ModalWindowAdd>
                    <div className={style["teacher-page__modal-window"]}>
                        <h4>Форма добавления подтемы</h4>
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

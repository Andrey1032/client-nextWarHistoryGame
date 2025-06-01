"use client";

import { teoriaService } from "@/services/teoria.service";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import style from "@/styles/TeacherPage.module.scss";
import Image from "next/image";
import Topic from "@/components/Teacher/Topic/Topic";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";
import Loader from "@/components/Loader/Loader";
import { ITopicModel } from "@/shared/interfaces/topic.interface";
import SubtopicAddForm from "@/components/Teacher/Topic/Subtopic/SubtopicAddForm";

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
    } = teoriaService.getOneTopic(Number(topic_id));

    //ТЕСТОВЫЕ ДАННЫЕ
    // const testSubtopics = testSubtopicsData(Number(topic_id));

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
                        {data?.getTopicOne?.name}&quot;
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
                        {data.getTopicOne.Subtopic?.map((topic) => (
                            <Topic key={topic.id} topic={topic} type="subtopic" />
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
                <ModalWindowAdd exit={() => setAddTopic(false)}>
                    <SubtopicAddForm
                        id={Number(topic_id)}
                        exitMode={() => setAddTopic(false)}
                    />
                </ModalWindowAdd>
            )}
        </div>
    );
}

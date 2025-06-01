"use client";

import Loader from "@/components/Loader/Loader";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";
import Topic from "@/components/Teacher/Topic/Topic";
import TopicAddForm from "@/components/Teacher/Topic/TopicAddForm";
import { teoriaService } from "@/services/teoria.service";
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
        teoriaService.getTopicies();

    return (
        <div className={style["teacher-page"]}>
            <h2 className={style["teacher-page__title"]}>
                Теоретический материал по темам
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
                        ></span>
                        <span
                            className={
                                style["teacher-page__topic-header__settings"]
                            }
                        >
                            Доступные функции
                        </span>
                    </div>
                    {data.getTopicAll?.map((topic) => (
                        <Topic key={topic.id} topic={topic} type="topic" />
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
                <ModalWindowAdd exit={() => setAddTopic(false)}>
                    <TopicAddForm exitMode={() => setAddTopic(false)} />
                </ModalWindowAdd>
            )}
        </div>
    );
}

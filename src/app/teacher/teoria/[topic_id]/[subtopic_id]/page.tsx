"use client";

import { topicService } from "@/services/teoria.service";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import style from "@/styles/TeacherPage.module.scss";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import { ITopicModel } from "@/shared/interfaces/topic.interface";
import { testSubtopicsData } from "../../data";
import MaterialList from "@/components/Teacher/Material/MaterialList";

export default function Page() {
    const router = useRouter();
    const { topic_id, subtopic_id } = useParams();

    const {
        loading,
        data,
    }: {
        loading: boolean;
        data: { getTopicOne: ITopicModel };
    } = topicService.getOneTopic(Number(topic_id));
    const testSubtopics = testSubtopicsData(Number(topic_id)).filter(
        (subtopic) => subtopic.id === Number(subtopic_id)
    )[0];
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
                        Выбрана подтема &quot;
                        {testSubtopics.name}&quot;
                    </h4>

                    <div className={style["teacher-page__content"]}>
                        <MaterialList
                            title="Текстовый материал"
                            data={testSubtopics.TheoryMaterial.filter(
                                (material) => material.TypeFile.name === "book"
                            )}
                        />
                        <MaterialList
                            title="Видео материал"
                            data={testSubtopics.TheoryMaterial.filter(
                                (material) => material.TypeFile.name === "video"
                            )}
                        />
                        <MaterialList
                            title="Аудио материал"
                            data={testSubtopics.TheoryMaterial.filter(
                                (material) => material.TypeFile.name === "audio"
                            )}
                        />
                        <MaterialList
                            title="Графический материал"
                            data={testSubtopics.TheoryMaterial.filter(
                                (material) => material.TypeFile.name === "image"
                            )}
                        />
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

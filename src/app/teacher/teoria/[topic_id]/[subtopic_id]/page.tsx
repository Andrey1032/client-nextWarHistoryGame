"use client";

import { teoriaService } from "@/services/teoria.service";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import style from "@/styles/TeacherPage.module.scss";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import { ISubtopicModel } from "@/shared/interfaces/topic.interface";
import MaterialList from "@/components/Teacher/Material/MaterialList";

export default function Page() {
    const router = useRouter();
    const {  subtopic_id } = useParams();

    const {
        loading,
        data,
    }: {
        loading: boolean;
        data: { getSubtopicOne: ISubtopicModel };
    } = teoriaService.getOneSubtopic(Number(subtopic_id));

    //ТЕСТОВЫЕ ДАННЫЕ
    // const testSubtopics = testSubtopicsData(Number(topic_id)).filter(
    //     (subtopic) => subtopic.id === Number(subtopic_id)
    // )[0];

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
                        {data?.getSubtopicOne?.name}&quot;
                    </h4>

                    <div className={style["teacher-page__content"]}>
                        <MaterialList
                            title="Текстовый материал"
                            data={data?.getSubtopicOne?.TheoryMaterial?.filter(
                                (material) => material.TypeFile.name === "book"
                            )}
                            typeMaterial="book"
                        />
                        <MaterialList
                            title="Видео материал"
                            data={data?.getSubtopicOne?.TheoryMaterial?.filter(
                                (material) => material.TypeFile.name === "video"
                            )}
                            typeMaterial="video"
                        />
                        <MaterialList
                            title="Аудио материал"
                            data={data?.getSubtopicOne?.TheoryMaterial?.filter(
                                (material) => material.TypeFile.name === "audio"
                            )}
                            typeMaterial="audio"
                        />
                        <MaterialList
                            title="Графический материал"
                            data={data?.getSubtopicOne?.TheoryMaterial?.filter(
                                (material) => material.TypeFile.name === "image"
                            )}
                            typeMaterial="image"
                        />
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

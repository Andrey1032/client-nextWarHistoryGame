"use client";
import Loader from "@/components/Loader/Loader";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";
import Question from "@/components/Teacher/Question/Question";
import QuestionAddForm from "@/components/Teacher/QuestionForm/QuestionAddForm";
import { teacherService } from "@/services/teacher.service";
import { IQuestionModel } from "@/shared/interfaces/question.interface";
import style from "@/styles/TeacherPage.module.scss";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [addQuestion, setAddQuestion] = useState(false);
    const { topic_id } = useParams();
    const {
        loading,
        data,
    }: {
        loading: boolean;
        data: { getQuestionAll: { Questions: IQuestionModel[] } };
    } = teacherService.getQuestionAll(Number(topic_id));
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
                        Вопросы по теме &quot;
                        {data?.getQuestionAll?.Questions[0]?.Topic?.name}
                        &quot;
                    </h4>
                    <div className={style["teacher-page__content"]}>
                        <div
                            className={`${style["teacher-page__topic-header"]} ${style["teacher-page__topic-header_2"]}`}
                        >
                            <span
                                className={style["teacher-page__header-title"]}
                            >
                                Текст вопроса
                            </span>
                            <span
                                className={
                                    style["teacher-page__header-settings"]
                                }
                            >
                                Доступные функции
                            </span>
                        </div>
                        {data?.getQuestionAll?.Questions?.map((question) => (
                            <Question {...question} key={question.id} />
                        ))}
                        <button
                            className={style["teacher-page__add-topic"]}
                            onClick={() => setAddQuestion(true)}
                        >
                            <Image
                                className={style["icon-add-topic"]}
                                src={"/plus.svg"}
                                alt="+"
                                width={17}
                                height={17}
                            />
                            Добавить вопрос
                        </button>
                    </div>
                </>
            ) : (
                <Loader />
            )}

            {addQuestion && (
                <ModalWindowAdd exit={() => setAddQuestion(false)}>
                    <QuestionAddForm exitMode={() => setAddQuestion(false)} />
                </ModalWindowAdd>
            )}
        </div>
    );
}

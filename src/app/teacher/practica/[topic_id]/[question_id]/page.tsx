"use client";
import Loader from "@/components/Loader/Loader";
import Answer from "@/components/Teacher/Answer/Answer";
import { teacherService } from "@/services/teacher.service";
import { IQuestionModel } from "@/shared/interfaces/question.interface";
import style from "@/styles/TeacherPage.module.scss";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    const { question_id } = useParams();
    const router = useRouter();
    const {
        loading,
        data,
    }: { loading: boolean; data: { getQuestionAOne: IQuestionModel } } =
        teacherService.getQuestionAOneId(Number(question_id));

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
                        Ответы для вопроса &quot;{data.getQuestionAOne.text}
                        &quot;
                    </h4>
                    <div className={style["teacher-page__content"]}>
                        <div
                            className={`${style["teacher-page__topic-header"]}`}
                        >
                            <span
                                className={
                                    style["teacher-page__header-title"]
                                }
                            >
                                Текст ответа
                            </span>
                            <span
                                className={
                                    style["teacher-page__header-settings"]
                                }
                            >
                                Верный ответ
                            </span>
                            <span
                                className={
                                    style["teacher-page__header-settings"]
                                }
                            >
                                Доступные функции
                            </span>
                        </div>
                        {data.getQuestionAOne.Answer?.map((answer) => (
                            <Answer {...answer} key={answer.id} />
                        ))}
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

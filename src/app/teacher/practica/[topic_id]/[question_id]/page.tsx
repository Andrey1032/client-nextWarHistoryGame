"use client";
import Answer from "@/components/Teacher/Answer/Answer";
import style from "@/styles/TeacherPractica.module.scss";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    const { question_id } = useParams();
    const router = useRouter();

    const answers = [
        {
            id: 0,
            text: "ответ 1",
            correct: false,
            FileAnswer: {
                url: "",
            },
        },
        {
            id: 1,
            text: "ответ 2",
            correct: false,
            FileAnswer: {
                url: "",
            },
        },
        {
            id: 2,
            text: "ответ 3",
            correct: true,
            FileAnswer: {
                url: "",
            },
        },
        {
            id: 3,
            text: "ответ 4",
            correct: false,
            FileAnswer: {
                url: "",
            },
        },
    ];
    return (
        <div className={style["teacher-practica"]}>
            <h4 className={style["teacher-practica__title"]}>
                <Image
                    className={style["teacher-practica__button-back"]}
                    src="/open-arrow.svg"
                    alt="назад"
                    width={25}
                    height={25}
                    onClick={() => router.back()}
                />{" "}
                Ответы для вопроса &quot;Текст вопроса&quot;
            </h4>
            <div className={style["teacher-practica__content"]}>
                <div className={`${style["teacher-practica__answers-header"]}`}>
                    <span className={style["teacher-practica__header-title"]}>
                        Текст ответа
                    </span>
                    <span
                        className={style["teacher-practica__header-settings"]}
                    >
                        Верный ответ
                    </span>
                    <span
                        className={style["teacher-practica__header-settings"]}
                    >
                        Доступные функции
                    </span>
                </div>
                {answers?.map((answer) => (
                    <Answer {...answer} key={answer.id} />
                ))}
            </div>
        </div>
    );
}

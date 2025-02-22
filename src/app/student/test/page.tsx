"use client";
import React, { useState } from "react";
import style from "@/styles/Test.module.scss";
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import Image from "next/image";
import SpeachToTextComponent from "@/components/SpeachToTextComponent/SpeachToTextComponent";
import TestButton from "@/components/ui/Form/form-elements/TestButton/TestButton";

export default function Page() {
    const [selectAnswer, setSelectAnswer] = useState<number | null>(null);
    const [test] = useState({
        type: "Викторина",
        question: "Когда началась Великая Отечественная война?",
        answers: [
            {
                id: 0,
                text: "22 июня 1941 года",
                url: "/paper.png",
            },
            {
                id: 1,
                text: "22 июля 1941 года",
                url: "/paper.png",
            },
            {
                id: 2,
                text: "21 июня 1940 года",
                url: "/paper.png",
            },
            {
                id: 3,
                text: "22 июня 1942 года",
                url: "/paper.png",
            },
        ],
    });

    switch (test.type) {
        case "Викторина":
            return (
                <ModalWindow>
                    <div className={style["test"]}>
                        <Image
                            className={style["test__image"]}
                            src="/personaj.png"
                            alt=""
                            width={1000}
                            height={1000}
                            style={{ width: "40%", height: "100%" }}
                        />
                        <div className={style["test__content"]}>
                            <div className="test__question">
                                {test.question}
                            </div>
                            <div className={style["test__answers"]}>
                                {test.answers.map((answer, id) => (
                                    <div
                                        className={`${style["test__answer"]} ${
                                            answer.id === selectAnswer &&
                                            style["test__answer_check"]
                                        }`}
                                        key={answer.id}
                                        onClick={() => setSelectAnswer(id)}
                                    >
                                        <Image
                                            src={answer.url}
                                            alt=""
                                            width={200}
                                            height={180}
                                        />
                                        <p>{answer.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className={style["test__response"]}>
                                <SpeachToTextComponent
                                    defaultValue={
                                        selectAnswer !== null
                                            ? test.answers[selectAnswer].text
                                            : null
                                    }
                                />
                                <TestButton onClick={() => {}}>
                                    К следующему вопросу
                                </TestButton>
                            </div>
                        </div>
                    </div>
                </ModalWindow>
            );
        case "Вставить пропуск":
            return (
                <ModalWindow>
                    <div className={style["test"]}>
                        <Image
                            className={style["test__image"]}
                            src="/personaj.png"
                            alt=""
                            width={1000}
                            height={1000}
                            style={{ width: "40%", height: "100%" }}
                        />
                        <div className={style["test__content"]}>
                            <div className="test__question">
                                {test.question}
                            </div>

                            <div className={style["test__response"]}>
                                <SpeachToTextComponent
                                    defaultValue={
                                        selectAnswer !== null
                                            ? test.answers[selectAnswer].text
                                            : null
                                    }
                                />
                                <TestButton onClick={() => {}}>
                                    К следующему вопросу
                                </TestButton>
                            </div>
                        </div>
                    </div>
                </ModalWindow>
            );
        case "Привести в порядок":
            return <ModalWindow></ModalWindow>;
        case "Сопоставление с картинкой":
            return <ModalWindow></ModalWindow>;
        case "Сопоставление с текстом":
            return <ModalWindow></ModalWindow>;
        default:
            return null;
    }
}

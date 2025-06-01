"use client";
import React, { useState } from "react";
import style from "@/styles/Test.module.scss";
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import Image from "next/image";
import TestFields from "@/components/Test/TestFields";
import { IQuestionModel } from "@/shared/interfaces/question.interface";

export default function Page() {
    const [test] = useState<IQuestionModel>({
        Answer: [
            {
                id: 14,
                text: "12",
                FileAnswer: {
                    id: 1,
                    url: "/paper.png",
                },
            },
            {
                id: 15,
                text: "14",
                FileAnswer: {
                    id: 1,
                    url: "/paper.png",
                },
            },
            {
                id: 16,
                text: "15",
                FileAnswer: {
                    id: 1,
                    url: "/paper.png",
                },
            },
            {
                id: 17,
                text: "16",
                FileAnswer: {
                    id: 1,
                    url: "/paper.png",
                },
            },
        ],
        id: 5,
        text: "Сколько дивизий народного ополчения сформировали москвичи для защиты столицы на дальних и ближних подступах к осени 1941 года?",
        TypeMiniGame: {
            name: "Викторина",
            id: 3,
        },
    });
    return (
        <ModalWindow>
            <div className={style["test"]}>
                <TestFields test={test}></TestFields>
            </div>
        </ModalWindow>
    );

    // switch (test.type) {
    //     case "Викторина":

    //     case "Вставить пропуск":
    //         return (
    //             <ModalWindow>
    //                 <div className={style["test"]}>
    //                     <Image
    //                         className={style["test__image"]}
    //                         src="/personaj.png"
    //                         alt=""
    //                         width={1000}
    //                         height={1000}
    //                         style={{ width: "40%", height: "100%" }}
    //                     />
    //                     <div className={style["test__content"]}>
    //                         <div className="test__question">
    //                             {test.question}
    //                         </div>

    //                         <div className={style["test__response"]}>
    //                             <SpeachToTextComponent
    //                                 defaultValue={
    //                                     selectAnswer !== null
    //                                         ? test.answers[selectAnswer].text
    //                                         : null
    //                                 }
    //                             />
    //                             <TestButton onClick={() => {}}>
    //                                 К следующему вопросу
    //                             </TestButton>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </ModalWindow>
    //         );
    //     case "Привести в порядок":
    //         return <ModalWindow></ModalWindow>;
    //     case "Сопоставление с картинкой":
    //         return <ModalWindow></ModalWindow>;
    //     case "Сопоставление с текстом":
    //         return <ModalWindow></ModalWindow>;
    //     default:
    //         return null;
    // }
}

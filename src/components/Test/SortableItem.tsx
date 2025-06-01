import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { IAnswerModel } from "@/shared/interfaces/question.interface";
import style from "@/styles/Test.module.scss";

export function SortableItem({
    id,
    answer,
}: {
    id: number;
    answer: IAnswerModel;
}) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: id });

    const styleCSS = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={styleCSS} {...attributes} {...listeners}>
            <div
                className={`${style["test__answer"]} ${
                    style["test__answer_sortable"]
                } ${
                    answer?.FileAnswer === null && style["test__answer_noimg"]
                }`}
                key={answer.id}
            >
                {answer?.FileAnswer !== null && (
                    <Image
                        className={style["test__answer-img"]}
                        src={answer?.FileAnswer.url}
                        alt=""
                        width={200}
                        height={180}
                    />
                )}
                <p>{answer.text}</p>
            </div>
        </div>
    );
}

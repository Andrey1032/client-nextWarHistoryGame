"use client";
import style from "./Answer.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { IAnswerModel } from "@/shared/interfaces/question.interface";
import AnswerEditForm from "./AnswerEditForm";

export default function Answer(answer: IAnswerModel) {
    const [editMode, setEditMode] = useState(false);
    return (
        <div key={answer.id} className={style["answer"]}>
            {editMode ? (
                <AnswerEditForm
                    answer={answer}
                    exitMode={() => setEditMode(false)}
                />
            ) : (
                <div
                    className={style["answer__name"]}
                    onDoubleClick={() => setEditMode(true)}
                >
                    {answer.text}
                </div>
            )}

            <div className={style["answer__correct-item"]} onClick={() => {}}>
                <button className={style["answer__correct-button"]}>
                    {answer.correct === "true" ? (
                        <Image
                            src="/check-circle.svg"
                            alt="Выбрать"
                            width={20}
                            height={20}
                        />
                    ) : (
                        <Image
                            src="/circle.svg"
                            alt="Выбрать"
                            width={20}
                            height={20}
                        />
                    )}
                </button>
            </div>

            <div className={style["answer__settings"]}>
                <Image
                    className={style["answer__edit"]}
                    src="/edit-pencil.svg"
                    alt="Редактировать"
                    width={20}
                    height={20}
                    onClick={() => setEditMode(true)}
                />
                <Image
                    className={style["question__del"]}
                    src="/delete.svg"
                    alt="Удалить"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
}

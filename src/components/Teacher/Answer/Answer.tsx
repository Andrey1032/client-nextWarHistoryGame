"use client";
import style from "./Answer.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { IAnswerModel } from "@/shared/interfaces/question.interface";

export default function Answer(answer: IAnswerModel) {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(answer.text);
    return (
        <div key={answer.id} className={style["answer"]}>
            {editMode ? (
                <input
                    className={style["answer__name"]}
                    type="text"
                    value={title}
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && setEditMode(false)}
                    onBlur={() => setTimeout(() => setEditMode(false), 75)}
                />
            ) : (
                <p
                    className={style["answer__name"]}
                    onDoubleClick={() => setEditMode(true)}
                >
                    {title}
                </p>
            )}

            <div className={style["answer__correct"]} onClick={() => {}}>
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
            </div>

            <div className={style["answer__settings"]}>
                {editMode ? (
                    <Image
                        className={style["answer__edit"]}
                        src="/check.svg"
                        alt="Сохранить"
                        width={20}
                        height={20}
                        onClick={() => setEditMode(false)}
                    />
                ) : (
                    <Image
                        className={style["answer__edit"]}
                        src="/edit-pencil.svg"
                        alt="Редактировать"
                        width={20}
                        height={20}
                        onClick={() => setEditMode(true)}
                    />
                )}

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

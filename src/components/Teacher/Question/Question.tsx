"use client";
import { PRIVATE_URL } from "@/config/url.config";
import style from "./Question.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
interface IQuestionComponent {
    id: number;
    text: string;
    TypeMiniGame: {
        name: string;
    };
}
export default function Question(question: IQuestionComponent) {
    const {topic_id} = useParams()
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(question.text);
    return (
        <div key={question.id} className={style["question"]}>
            {editMode ? (
                <input
                    className={style["question__name"]}
                    type="text"
                    value={title}
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && setEditMode(false)}
                    onBlur={() => setTimeout(() => setEditMode(false), 75)}
                />
            ) : (
                <Link
                    href={PRIVATE_URL.practica(`/${topic_id}/${question.id}`)}
                    className={style["question__name"]}
                    onKeyDown={(e) => e.key === "Enter" && setEditMode(true)}
                >
                    {title}
                </Link>
            )}
            <div className={style["question__settings"]}>
                {editMode ? (
                    <Image
                        className={style["question__edit"]}
                        src="/check.svg"
                        alt="Сохранить"
                        width={20}
                        height={20}
                        onClick={() => setEditMode(false)}
                    />
                ) : (
                    <Image
                        className={style["question__edit"]}
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

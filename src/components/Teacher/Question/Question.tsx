"use client";
import { PRIVATE_URL } from "@/config/url.config";
import style from "./Question.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IQuestionModel } from "@/shared/interfaces/question.interface";
import QuestionEditForm from "../QuestionForm/QuestionEditForm";

export default function Question(question: IQuestionModel) {
    const { topic_id } = useParams();
    const [editMode, setEditMode] = useState(false);
    return (
        <div key={question.id} className={style["question"]}>
            <Link
                href={PRIVATE_URL.practica(`/${topic_id}/${question.id}`)}
                className={style["question__name"]}
            >
                {question.text}
            </Link>
            <div className={style["question__settings"]}>
                <Image
                    className={style["question__edit"]}
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
            {editMode && (
                <QuestionEditForm
                    question={question}
                    exitMode={() => setEditMode(false)}
                />
            )}
        </div>
    );
}

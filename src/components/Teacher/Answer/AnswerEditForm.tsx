"use client";
import style from "./Answer.module.scss";
import { useRef, useState } from "react";
import { teoriaService } from "@/services/teoria.service";
// import { useOnClickOutside } from "usehooks-ts";
import { IAnswerModel } from "@/shared/interfaces/question.interface";

export default function AnswerEditForm({
    answer,
    exitMode,
}: {
    answer: IAnswerModel;
    exitMode: () => void;
}) {
    const [title, setTitle] = useState(answer.text);
    const { editTopic } = teoriaService.updateTopic(() => exitMode());
    const ref = useRef<HTMLDivElement>(null);

    // useOnClickOutside(ref, () => exitMode());

    return (
        <div className={`${style["answer__name_edit"]}`} ref={ref}>
            <input
                className={style["answer__name-input"]}
                type="text"
                value={title}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        if (title.trim() !== answer.text) {
                            editTopic({
                                variables: {
                                    updateTopicData: {
                                        id: answer.id,
                                        name: title,
                                    },
                                },
                            });
                        } else exitMode();
                    }
                }}
            />
            <button
                className={style["answer__edit"]}
                onClick={() => {
                    if (title.trim() !== answer.text) {
                        editTopic({
                            variables: {
                                updateTopicData: {
                                    id: answer.id,
                                    name: title,
                                },
                            },
                        });
                    } else exitMode();
                }}
            >
                Сохранить
            </button>
        </div>
    );
}

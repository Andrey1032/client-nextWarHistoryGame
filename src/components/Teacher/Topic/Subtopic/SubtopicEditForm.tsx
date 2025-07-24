"use client";
import style from "../Topic.module.scss";
import { ISubtopicModel } from "@/shared/interfaces/topic.interface";
import { useRef, useState } from "react";
import { teoriaService } from "@/services/teoria.service";
// import { useOnClickOutside } from "usehooks-ts";

export default function SubtopicEditForm({
    subtopic,
    exitMode,
}: {
    subtopic: ISubtopicModel;
    exitMode: () => void;
}) {
    const [title, setTitle] = useState(subtopic.name);

    const { editSubtopic } = teoriaService.updateSubtopic(() => exitMode());

    const ref = useRef<HTMLDivElement>(null);

    // useOnClickOutside(ref, () => exitMode());

    return (
        <div className={style["topic__name_edit"]} ref={ref}>
            <input
                className={style["topic__name-input"]}
                type="text"
                value={title}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        if (title.trim() !== subtopic.name) {
                            editSubtopic({
                                variables: {
                                    updateSubtopicData: {
                                        id: subtopic.id,
                                        name: title,
                                    },
                                },
                            });
                            exitMode();
                        } else exitMode();
                    }
                }}
            />
            <button
                className={style["topic__edit"]}
                onClick={() => {
                    if (title.trim() !== subtopic.name) {
                        editSubtopic({
                            variables: {
                                updateSubtopicData: {
                                    id: subtopic.id,
                                    name: title,
                                },
                            },
                        });
                        exitMode();
                    } else exitMode();
                }}
            >
                Сохранить
            </button>
        </div>
    );
}

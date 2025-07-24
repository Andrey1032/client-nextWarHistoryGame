"use client";
import style from "./Topic.module.scss";
import {
    ISubtopicModel,
    ITopicModel,
} from "@/shared/interfaces/topic.interface";
import { useRef, useState } from "react";
import { teoriaService } from "@/services/teoria.service";
// import { useOnClickOutside } from "usehooks-ts";

export default function TopicEditForm({
    topic,
    exitMode,
}: {
    topic: ITopicModel | ISubtopicModel;
    exitMode: () => void;
}) {
    const [title, setTitle] = useState(topic.name);
    const { editTopic } = teoriaService.updateTopic(() => exitMode());
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
                        if (title.trim() !== topic.name) {
                            editTopic({
                                variables: {
                                    updateTopicData: {
                                        id: topic.id,
                                        name: title,
                                    },
                                },
                            });
                        } else exitMode();
                    }
                }}
            />
            <button
                className={style["topic__edit"]}
                onClick={() => {
                    if (title.trim() !== topic.name) {
                        editTopic({
                            variables: {
                                updateTopicData: {
                                    id: topic.id,
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

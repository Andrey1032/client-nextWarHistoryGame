"use client";

import Image from "next/image";
import style from "./Topic.module.scss";
import { useState } from "react";
import Link from "next/link";
import {
    ISubtopicModel,
    ITopicModel,
} from "@/shared/interfaces/topic.interface";
import { usePathname } from "next/navigation";
import { teoriaService } from "@/services/teoria.service";
import TopicEditForm from "./TopicEditForm";
import SubtopicEditForm from "./Subtopic/SubtopicEditForm";

export default function Topic({
    topic,
    type,
}:
    | {
          topic: ITopicModel;
          type: "topic";
      }
    | { topic: ISubtopicModel; type: "subtopic" }) {
    const [editMode, setEditMode] = useState(false);
    const path = usePathname();
    const { removeTopic } = teoriaService.deleteTopic();
    const { removeSubtopic } = teoriaService.deleteSubtopic();

    switch (type) {
        case "topic":
            return (
                <div className={style["topic"]}>
                    {editMode ? (
                        <TopicEditForm
                            topic={topic}
                            exitMode={() => setEditMode(false)}
                        />
                    ) : (
                        <Link
                            href={`${path}/${topic.id}`}
                            className={style["topic__name"]}
                        >
                            {topic.name}
                        </Link>
                    )}
                    <div className={style["topic__count"]}>
                        {topic._count.Question}
                    </div>
                    <div className={style["topic__settings"]}>
                        <button
                            className={style["topic__edit"]}
                            onClick={() => setEditMode(true)}
                        >
                            <Image
                                src="/edit-pencil.svg"
                                alt="Редактировать"
                                width={20}
                                height={20}
                            />
                        </button>

                        <Image
                            className={style["topic__del"]}
                            src="/delete.svg"
                            alt="Удалить"
                            width={20}
                            height={20}
                            onClick={() =>
                                confirm(
                                    `Вы хотите удалить тему: ${topic.name}`
                                ) &&
                                removeTopic({
                                    variables: {
                                        deleteTopicId: topic.id,
                                    },
                                })
                            }
                        />
                    </div>
                </div>
            );
        case "subtopic":
            return (
                <div className={style["topic"]}>
                    {editMode ? (
                        <SubtopicEditForm
                            subtopic={topic}
                            exitMode={() => setEditMode(false)}
                        />
                    ) : (
                        <Link
                            href={`${path}/${topic.id}`}
                            className={style["topic__name"]}
                        >
                            {topic.name}
                        </Link>
                    )}
                    <div className={style["topic__count"]}></div>
                    <div className={style["topic__settings"]}>
                        <Image
                            className={style["topic__edit"]}
                            src="/edit-pencil.svg"
                            alt="Редактировать"
                            width={20}
                            height={20}
                            onClick={() => setEditMode(true)}
                        />
                        <Image
                            className={style["topic__del"]}
                            src="/delete.svg"
                            alt="Удалить"
                            width={20}
                            height={20}
                            onClick={() =>
                                confirm(
                                    `Вы хотите удалить подтему: ${topic.name}`
                                ) &&
                                removeSubtopic({
                                    variables: {
                                        id: topic.id,
                                    },
                                })
                            }
                        />
                    </div>
                </div>
            );
    }
}

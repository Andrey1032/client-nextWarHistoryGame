"use client";

import Image from "next/image";
import style from "./Topic.module.scss";
import { useState } from "react";
import Link from "next/link";
import { PRIVATE_URL } from "@/config/url.config";
import {
    ISubtopicModel,
    ITopicModel,
} from "@/shared/interfaces/topic.interface";
import { usePathname } from "next/navigation";

export default function Topic({
    topic,
    type,
}:
    | {
          topic: ITopicModel;
          type: "practica";
      }
    | { topic: ITopicModel | ISubtopicModel; type: "teoria" }) {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(topic.name);
    const path = usePathname();
    switch (type) {
        case "practica":
            return (
                <div key={topic.id} className={style["topic"]}>
                    {editMode ? (
                        <input
                            className={style["topic__name"]}
                            type="text"
                            value={title}
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && setEditMode(false)
                            }
                            onBlur={() =>
                                setTimeout(() => setEditMode(false), 75)
                            }
                        />
                    ) : (
                        <Link
                            href={`${path}/${topic.id}`}
                            className={style["topic__name"]}
                            onKeyDown={(e) =>
                                e.key === "Enter" && setEditMode(true)
                            }
                        >
                            {title}
                        </Link>
                    )}
                    <div className={style["topic__count"]}>
                        {topic._count.Question}
                    </div>
                    <div className={style["topic__settings"]}>
                        {editMode ? (
                            <Image
                                className={style["topic__edit"]}
                                src="/check.svg"
                                alt="Сохранить"
                                width={20}
                                height={20}
                                onClick={() => setEditMode(false)}
                            />
                        ) : (
                            <Image
                                className={style["topic__edit"]}
                                src="/edit-pencil.svg"
                                alt="Редактировать"
                                width={20}
                                height={20}
                                onClick={() => setEditMode(true)}
                            />
                        )}

                        <Image
                            className={style["topic__del"]}
                            src="/delete.svg"
                            alt="Удалить"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            );
        case "teoria":
            return (
                <div key={topic.id} className={style["topic"]}>
                    {editMode ? (
                        <input
                            className={style["topic__name"]}
                            type="text"
                            value={title}
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && setEditMode(false)
                            }
                            onBlur={() =>
                                setTimeout(() => setEditMode(false), 75)
                            }
                        />
                    ) : (
                        <Link
                            href={`${path}/${topic.id}`}
                            className={style["topic__name"]}
                            onKeyDown={(e) =>
                                e.key === "Enter" && setEditMode(true)
                            }
                        >
                            {title}
                        </Link>
                    )}
                    <div className={style["topic__count"]}></div>
                    <div className={style["topic__settings"]}>
                        {editMode ? (
                            <Image
                                className={style["topic__edit"]}
                                src="/check.svg"
                                alt="Сохранить"
                                width={20}
                                height={20}
                                onClick={() => setEditMode(false)}
                            />
                        ) : (
                            <Image
                                className={style["topic__edit"]}
                                src="/edit-pencil.svg"
                                alt="Редактировать"
                                width={20}
                                height={20}
                                onClick={() => setEditMode(true)}
                            />
                        )}

                        <Image
                            className={style["topic__del"]}
                            src="/delete.svg"
                            alt="Удалить"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            );
    }
}

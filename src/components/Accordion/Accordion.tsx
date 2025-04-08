"use client";

import Image from "next/image";
import Reader from "../Reader/Reader";
import style from "./Accordion.module.scss";
import { Fragment } from "react";

interface IAccodionComponent {
    text_content: { title: string; url: string }[];
    video_content: { title: string; url: string }[];
    audio_content: { title: string; url: string }[];
    image_content: { title: string; url: string }[];
}

export default function Accordion({ ...attributes }: IAccodionComponent) {
    return (
        <div className={style["accordion"]}>
            {/* Текстовая информация */}
            <details
                className={style["accordion__details"]}
                name="teoria-content"
            >
                <summary className={style["accordion__summary"]}>
                    <span
                        className={style["accordion__title"]}
                        role="tern"
                        aria-details="teoria-content-1"
                    >
                        Текстовая информация
                    </span>
                </summary>
            </details>
            <div className={style["accordion__content"]}>
                <div className={style["accordion__content-body"]}>
                    <div className={style["accordion__content-reader"]}>
                        {attributes.text_content?.map((text, id) => (
                            <Fragment key={`text_${id}`}>
                                <details
                                    className={style["accordion__details"]}
                                    name="text-content"
                                >
                                    <summary
                                        className={style["accordion__summary"]}
                                    >
                                        <span
                                            className={
                                                style["accordion__title"]
                                            }
                                            role="tern"
                                            aria-details={`teoria-content-${id}`}
                                        >
                                            {text.title}
                                        </span>
                                    </summary>
                                </details>
                                <div className={style["accordion__content"]}>
                                    <div
                                        className={
                                            style["accordion__content-body"]
                                        }
                                    >
                                        <div
                                            key={`text_${id}`}
                                            className={
                                                style["accordion__reader"]
                                            }
                                        >
                                            <Reader url={text.url} />
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
            {/* Кинохроника */}
            <details
                className={style["accordion__details"]}
                name="teoria-content"
            >
                <summary className={style["accordion__summary"]}>
                    <span
                        className={style["accordion__title"]}
                        role="tern"
                        aria-details="teoria-content-2"
                    >
                        Кинохроника
                    </span>
                </summary>
            </details>
            <div className={style["accordion__content"]}>
                <div className={style["accordion__content-body"]}>
                    {attributes.video_content?.map((video, id) => (
                        <Fragment key={`video_${id}`}>
                            <details
                                className={style["accordion__details"]}
                                name="video-content"
                            >
                                <summary
                                    className={style["accordion__summary"]}
                                >
                                    <span
                                        className={style["accordion__title"]}
                                        role="tern"
                                        aria-details={`teoria-content-${id}`}
                                    >
                                        {video.title}
                                    </span>
                                </summary>
                            </details>
                            <div className={style["accordion__content"]}>
                                <div
                                    className={style["accordion__content-body"]}
                                >
                                    <video width="600" height="auto" controls>
                                        <source
                                            src={video.url}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
            {/* Аудио материал */}
            <details
                className={style["accordion__details"]}
                name="teoria-content"
            >
                <summary className={style["accordion__summary"]}>
                    <span
                        className={style["accordion__title"]}
                        role="tern"
                        aria-details="teoria-content-3"
                    >
                        Аудио материал
                    </span>
                </summary>
            </details>
            <div className={style["accordion__content"]}>
                <div className={style["accordion__content-body"]}>
                    {attributes.audio_content?.map((audio, id) => (
                        <Fragment key={`audio_${id}`}>
                            <details
                                className={style["accordion__details"]}
                                name="audio-content"
                            >
                                <summary
                                    className={style["accordion__summary"]}
                                >
                                    <span
                                        className={style["accordion__title"]}
                                        role="tern"
                                        aria-details={`teoria-content-${id}`}
                                    >
                                        {audio.title}
                                    </span>
                                </summary>
                            </details>
                            <div className={style["accordion__content"]}>
                                <div
                                    className={style["accordion__content-body"]}
                                >
                                    <audio controls preload="none">
                                        <source
                                            src={audio.url}
                                            type="audio/mp3"
                                        />
                                    </audio>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
            {/* Изображения */}
            <details
                className={style["accordion__details"]}
                name="teoria-content"
            >
                <summary className={style["accordion__summary"]}>
                    <span
                        className={style["accordion__title"]}
                        role="tern"
                        aria-details="teoria-content-4"
                    >
                        Изображения
                    </span>
                </summary>
            </details>
            <div className={style["accordion__content"]}>
                <div className={style["accordion__content-body"]}>
                    <div className={style["accordion__images"]}>
                        {attributes.image_content?.map((image, id) => (
                            <div
                                key={`image_${id}`}
                                className={style["accordion__images-item"]}
                            >
                                <Image
                                    src={image?.url}
                                    width={600}
                                    height={400}
                                    alt="Неизветсная ошибка"
                                />
                                <p className={style["accordion__title"]}>
                                    {image.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useParams } from "next/navigation";
import style from "@/styles/Teoria.module.scss";
import Reader from "@/components/Reader/Reader";

export default function Page() {
    const id = Number(useParams().id);

    const data = [
        "Оборона Брестской крепости",
        "Смоленское сражение",
        "Оборона Киева",
        "Оборона Одессы",
        "Битва за Ленинград",
        "Битва за Москву",
    ];

    return (
        <div className={style["teoria"]}>
            <h1 className={style["teoria__title"]}>
                Теоретичский материал по теме «{data[id]}»
            </h1>
            <div className={style["teoria__content"]}>
                <div className="teoria__video-content">
                    <h1 className={style["teoria__content_title"]}>
                        Посмотрите
                    </h1>
                    <video width="100%" height="auto" controls>
                        <source src="/video/tema1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className={style["teoria__content_title"]}>
                        Прослушайте
                    </h1>
                    <audio controls preload="none">
                        <source src="/audio/tema1.mp3" type="audio/mp3" />
                    </audio>
                </div>
                <div className={style["teoria__text-content"]}>
                    <div className={style["teoria__reader"]}>
                        <Reader />
                    </div>
                </div>
            </div>
        </div>
    );
}

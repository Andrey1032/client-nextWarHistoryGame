"use client";

import { useParams } from "next/navigation";
import style from "@/styles/Teoria.module.scss";
import Modal from "@/components/ModalPage/ModalPage";
import Accordion from "@/components/Accordion/Accordion";

export default function Page() {
    const id = Number(useParams().id);

    const data = ["Призыв", "Учебная часть", "Битва за Москву"];
    const content = {
        text_content: [
            { title: "Начало ВОВ", url: "/StartVOV.epub" },
            { title: "Начало ВОВ-2", url: "/StartVOV.epub" },
            { title: "Начало ВОВ-3", url: "/StartVOV.epub" },
            { title: "Начало ВОВ-4", url: "/StartVOV.epub" },
            { title: "Начало ВОВ-5", url: "/StartVOV.epub" },
            { title: "Начало ВОВ-6", url: "/StartVOV.epub" },
        ],
        video_content: [
            { title: "Начало ВОВ", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-2", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-3", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-4", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-5", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-6", url: "/video/StartVOV1941.mp4" },
        ],
        audio_content: [
            { title: "Начало ВОВ", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-2", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-3", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-4", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-5", url: "/video/StartVOV1941.mp4" },
            { title: "Начало ВОВ-6", url: "/video/StartVOV1941.mp4" },
        ],
        image_content: [
            { title: "Начало ВОВ", url: "/photo1.jpg" },
            { title: "Начало ВОВ-2", url: "/photo1.jpg" },
            { title: "Начало ВОВ-3", url: "/photo1.jpg" },
            { title: "Начало ВОВ-4", url: "/photo1.jpg" },
            { title: "Начало ВОВ-5", url: "/photo1.jpg" },
            { title: "Начало ВОВ-6", url: "/photo1.jpg" },
        ],
    };
    return (
        <Modal>
            <h1 className={style["teoria__title"]}>
                Теоретичский материал по теме «{data[id]}»
            </h1>
            <div className={`${style["teoria__content"]}`}>
                <Accordion {...content} />
            </div>
        </Modal>
    );
}

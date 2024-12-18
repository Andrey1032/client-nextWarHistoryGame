import React from "react";
import style from "@/assets/styles/Teoria.module.scss";
import Modal from "@/components/Modal/Modal";
import List from "@/components/List/List";

export default function Page() {
    const data = [
        {
            title: "Оборона Брестской крепости",
            url: "/paper.png",
        },
        {
            title: "Смоленское сражение",
            url: "/paper.png",
        },
        {
            title: "Оборона Киева",
            url: "/paper.png",
        },
        {
            title: "Оборона Одессы",
            url: "/paper.png",
        },
        {
            title: "Битва за Ленинград",
            url: "/paper.png",
        },
        {
            title: "Битва за Москву",
            url: "/paper.png",
        },
    ];
    return (
        <Modal>
            <h1 className={style["teoria__title"]}>
                База знаний игры «Путь к Победе»
            </h1>
            <div className={style["teoria__list"]}>
                <List data={data} />
            </div>
        </Modal>
    );
}

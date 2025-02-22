"use client";

import React, { useState } from "react";
import style from "@/styles/Teoria.module.scss";
import Modal from "@/components/ModalPage/ModalPage";
import List from "@/components/List/List";
import Link from "next/link";

export default function Page() {
    const [currentData, setCurrentData] = useState(0);
    const data = [
        {
            title: "Оборона Брестской крепости",
            subDocuments: [
                {
                    title: "Оборона Брестской крепости 1",
                    url: "/paper.png",
                },
                {
                    title: "Оборона Брестской крепости 2",
                    url: "/paper.png",
                },
                {
                    title: "Оборона Брестской крепости 3",
                    url: "/paper.png",
                },
            ],
        },
        {
            title: "Смоленское сражение",
            subDocuments: [
                {
                    title: "Смоленское сражение 1",
                    url: "/paper.png",
                },
                {
                    title: "Смоленское сражение 2",
                    url: "/paper.png",
                },
                {
                    title: "Смоленское сражение 3",
                    url: "/paper.png",
                },
            ],
        },
        {
            title: "Оборона Киева",
            subDocuments: [
                {
                    title: "Оборона Киева 1",
                    url: "/paper.png",
                },

                {
                    title: "Оборона Киева 2",
                    url: "/paper.png",
                },

                {
                    title: "Оборона Киева 3",
                    url: "/paper.png",
                },
            ],
        },
    ];
    return (
        <Modal>
            <h1 className={style["teoria__title"]}>
                База знаний игры «Путь к Победе»
            </h1>
            <div className={style["teoria__list"]}>
                <div className={style["teoria__nav"]}>
                    <Link
                        href="https://www.pobediteli.ru/flash.html"
                        className={style["teoria__nav-item"]}
                    >
                        «Победители»
                    </Link>
                    {data?.map((teoria, id) => (
                        <div
                            className={`${style["teoria__nav-item"]} ${
                                id === currentData
                                    ? style["teoria__nav-item_active"]
                                    : ""
                            }`}
                            key={id}
                            onClick={() => setCurrentData(id)}
                        >
                            {teoria.title}
                        </div>
                    ))}
                </div>
                <List data={data[currentData].subDocuments} />
            </div>
        </Modal>
    );
}

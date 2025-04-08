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
            title: "Призыв",
            subDocuments: [
                {
                    title: "Призыв 1",
                    url: "/paper.png",
                },
                {
                    title: "Призыв 2",
                    url: "/paper.png",
                },
                {
                    title: "Призыв 3",
                    url: "/paper.png",
                },
            ],
        },
        {
            title: "Учебная часть",
            subDocuments: [
                {
                    title: "Учебная часть 1",
                    url: "/paper.png",
                },
                {
                    title: "Учебная часть 2",
                    url: "/paper.png",
                },
                {
                    title: "Учебная часть 3",
                    url: "/paper.png",
                },
            ],
        },
        {
            title: "Битва за Москву",
            subDocuments: [
                {
                    title: "Битва за Москву 1",
                    url: "/paper.png",
                },

                {
                    title: "Битва за Москву 2",
                    url: "/paper.png",
                },

                {
                    title: "Битва за Москву 3",
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

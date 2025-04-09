"use client";

import React, { useState } from "react";
import style from "@/styles/Teoria.module.scss";
import List from "@/components/List/List";
import Link from "next/link";

export default function Page() {
    const [currentData, setCurrentData] = useState(0);

    const data = [
        {
            title: "Призыв",
            subDocuments: [
                {
                    id: 0,
                    name: "Призыв 1",
                },
                {
                    id: 1,
                    name: "Призыв 2",
                },
                {
                    id: 2,
                    name: "Призыв 3",
                },
            ],
        },
        {
            title: "Учебная часть",
            subDocuments: [
                {
                    id: 3,
                    name: "Учебная часть 1",
                },
                {
                    id: 4,
                    name: "Учебная часть 2",
                },
                {
                    id: 5,
                    name: "Учебная часть 3",
                },
            ],
        },
        {
            title: "Битва за Москву",
            subDocuments: [
                {
                    id: 6,
                    name: "Битва за Москву 1",
                },

                {
                    id: 7,
                    name: "Битва за Москву 2",
                },

                {
                    id: 8,
                    name: "Битва за Москву 3",
                },
            ],
        },
    ];
    return (
        <div className={style["teoria"]}>
            <h1 className={style["teoria__title"]}>
                База знаний игры «Путь к Победе»
            </h1>
            <div className={style["teoria__list"]}>
                <div className={style["teoria__nav"]}>
                    <Link
                        href="https://www.pobediteli.ru/flash.html"
                        className={style["teoria__nav-item"]}
                        target="_blank"
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
        </div>
    );
}

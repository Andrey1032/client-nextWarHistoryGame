"use client";

import React, { useState } from "react";
import style from "@/styles/Teoria.module.scss";
import Modal from "@/components/ModalPage/ModalPage";
import List from "@/components/List/List";
import Link from "next/link";
import { topicService } from "@/services/teoria.service";
import { ITopic } from "@/shared/interfaces/topic.interface";
import Loader from "@/components/Loader/Loader";

export default function Page() {
    const [currentData, setCurrentData] = useState(0);
    const {
        loading,
        data,
    }: { loading: boolean; data: { getTopicAll: ITopic[] } } =
        topicService.getTopicies();

    const dataTest = [
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
        <Modal>
            <h1 className={style["teoria__title"]}>
                База знаний игры «Путь к Победе»
            </h1>
            <div className={style["teoria__list"]}>
                {!loading ? (
                    <>
                        <div className={style["teoria__nav"]}>
                            <Link
                                target="_blank"
                                href="https://www.pobediteli.ru/flash.html"
                                className={style["teoria__nav-item"]}
                            >
                                «Победители»
                            </Link>

                            {data.getTopicAll?.map((teoria, id) => (
                                <div
                                    className={`${style["teoria__nav-item"]} ${
                                        id === currentData
                                            ? style["teoria__nav-item_active"]
                                            : ""
                                    }`}
                                    key={id}
                                    onClick={() => setCurrentData(id)}
                                >
                                    {teoria.name}
                                </div>
                            ))}
                        </div>
                        <List data={data.getTopicAll[currentData].Subtopic} />
                    </>
                ) : (
                    <Loader color="#ffffff" />
                )}
            </div>
        </Modal>
    );
}

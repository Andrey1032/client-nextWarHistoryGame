"use client";

import Modal from "@/components/ModalPage/ModalPage";

import { useState } from "react";
import style from "@/styles/Top.module.scss";

const Page = () => {
    const groupName = "21Пинж(б)РПиС";
    const [group] = useState([
        { name: "Мартынов Андрей", rating: 5, zvanie: "Лейтенант", wounds: 0 },
        { name: "Мартынов Андрей", rating: 5, zvanie: "Лейтенант", wounds: 0 },
        { name: "Мартынов Андрей", rating: 5, zvanie: "Лейтенант", wounds: 0 },
        { name: "Мартынов Андрей", rating: 5, zvanie: "Лейтенант", wounds: 0 },
    ]);
    return (
        <Modal>
            <p className={style["top-page__title"]}>
                Список участников (группа {groupName})
            </p>
            <div className={style["top-page__table"]}>
                <div
                    className={`${style["top-page__table-item"]} ${style["top-page__table-item_titles"]}`}
                >
                    <p>Место</p>
                    <p>Рейтинг</p>
                    <p>Звание</p>
                    <p>Имя Фамилия</p>
                    <p>Ранений</p>
                </div>
                {group?.map((student, id) => (
                    <div className={style["top-page__table-item"]} key={id}>
                        <p>{id + 1}</p>
                        <p>{student.rating}</p>
                        <p>{student.zvanie}</p>
                        <p>{student.name}</p>
                        <p>{student.wounds}</p>
                    </div>
                ))}
            </div>
        </Modal>
    );
};
export default Page;

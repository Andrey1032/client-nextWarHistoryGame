"use client";

import { useState } from "react";
import style from "@/styles/Top.module.scss";
const Page = () => {
    const groupName = "21Пинж(б)РПиС";
    const [group] = useState([
        { name: "Иван", rating: 5, zvanie: "Лейтенант", wounds: 0 },
        { name: "Андрей", rating: 4.5, zvanie: "Лейтенант", wounds: 1 },
        { name: "Виталий", rating: 3.32, zvanie: "Лейтенант", wounds: 3 },
        { name: "Георгий", rating: 4, zvanie: "Лейтенант", wounds: 1 },
    ]);
    return (
        <div className={style["top-page"]}>
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
                {group?.sort((a,b) => b.rating - a.rating)?.map((student, id) => (
                    <div className={style["top-page__table-item"]} key={id}>
                        <p>{id + 1}</p>
                        <p>{student.rating}</p>
                        <p>{student.zvanie}</p>
                        <p>{student.name}</p>
                        <p>{student.wounds}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Page;

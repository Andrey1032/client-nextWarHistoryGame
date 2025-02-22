import style from "@/styles/Awards.module.scss";
import List from "@/components/List/List";

import Modal from "@/components/ModalPage/ModalPage";
import React from "react";

const Page = () => {
    const dataOrdens = [
        {
            title: "Орден Красной звезды",
            url: "/ordenKrasnoyZvezda.png",
            lock: false,
        },
        {
            title: "Орден Красного знамени",
            url: "/ordenKrasnogoZnameni.png",
            lock: false,
        },
        {
            title: "Орден Ленина",
            url: "/ordenLenina.png",
            lock: false,
        },
        {
            title: "Маршальская звезда",
            url: "/medalMarshalskay.png",
            lock: false,
        },
    ];
    const dataMedals = [
        {
            title: "Золотая звезда",
            url: "/medalZolotaya.png",
            lock: false,
        },
        {
            title: "Медаль «За отвагу»",
            url: "/medalZaOtvagu.png",
            lock: false,
        },
        {
            title: "Медаль «За боевые заслуги»",
            url: "/medalZaBoevZaslugi.png",
            lock: false,
        },
    ];
    return (
        <Modal>
            <h1 className={style["awards__title"]}>
                Ордена и медали игры «Путь к Победе»
            </h1>
            <div className={style["awards__content"]}>
                <div className={style["awards__list"]}>
                    <h2
                        className={`${style["awards__subtitle"]} text text_size-24 text_cw text_pos-center`}
                    >
                        Ордена
                    </h2>
                    <List
                        data={dataOrdens}
                        card_className={["card_small", "card_award"]}
                    />
                </div>
                <div className={style["awards__list"]}>
                    <h2
                        className={`${style["awards__subtitle"]} text text_size-24 text_cw text_pos-center`}
                    >
                        Медали
                    </h2>
                    <List
                        data={dataMedals}
                        card_className={["card_small", "card_award"]}
                    />
                </div>
            </div>
        </Modal>
    );
};
export default Page;

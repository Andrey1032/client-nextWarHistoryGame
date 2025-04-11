"use client";

import style from "@/styles/Awards.module.scss";
import List from "@/components/List/List";

import Modal from "@/components/ModalPage/ModalPage";
import React from "react";
import { awardService } from "@/services/awards.service";
import { IReward } from "@/shared/interfaces/reward.interface";
import Loader from "@/components/Loader/Loader";

const Page = () => {
    const {
        loading,
        data,
    }: { loading: boolean; data: { getRewardAll: IReward[] } } =
        awardService.getAwards();
    const dataOrdens = data?.getRewardAll?.filter(
        (item: IReward) => item.typeRewardId === 1 && item.url !== null
    );
    const dataMedals = data?.getRewardAll?.filter(
        (item: IReward) => item.typeRewardId === 2 && item.url !== null
    );
    return (
        <Modal>
            <h1 className={style["awards__title"]}>
                Ордена и медали игры «Путь к Победе»
            </h1>
            {!loading ? (
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
            ) : (
                <Loader color="#ffffff" />
            )}
        </Modal>
    );
};
export default Page;

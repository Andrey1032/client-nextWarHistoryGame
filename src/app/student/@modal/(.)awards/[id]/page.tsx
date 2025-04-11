"use client";

import { useParams } from "next/navigation";
import style from "@/styles/Awards.module.scss";
import Modal from "@/components/ModalPage/ModalPage";
import { awardService } from "@/services/awards.service";
import Image from "next/image";
import { IReward } from "@/shared/interfaces/reward.interface";
import Loader from "@/components/Loader/Loader";

export default function Page() {
    const id = Number(useParams().id);
    const {
        loading,
        data,
    }: { loading: boolean; data: { getRewardAOne: IReward } } =
        awardService.getOneAward(id);
    return (
        <Modal>
            {!loading ? (
                <>
                    <div className={style["awards__title"]}>
                        <div
                            className={`${style["card__title"]} text text_w-600 text_size-20`}
                        >
                            {data.getRewardAOne?.name}
                        </div>
                    </div>
                    <div className={style["awards__content"]}>
                        <Image
                            className={style["awards__image"]}
                            src={`${process.env.SERVER_URL}/static/${data.getRewardAOne?.url}`}
                            alt="картинка"
                            width={400}
                            height={400}
                        />
                        <div>Описание:<br/>{data.getRewardAOne?.description}</div>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </Modal>
    );
}

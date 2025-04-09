"use client";

import Loader from "@/components/Loader/Loader";
import { awardService } from "@/services/awards.service";
import { IReward } from "@/shared/types/reward.interface";
import style from "@/styles/Awards.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
    const id = Number(useParams().id);
    const {
        loading,
        data,
    }: { loading: boolean; data: { getRewardAOne: IReward } } =
        awardService.getOneAward(id);
    console.log(data);
    return (
        <div className={style["awards"]}>
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
                            width={800}
                            height={600}
                        />
                        <div>
                            Описание:
                            <br />
                            {data.getRewardAOne?.description}
                        </div>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

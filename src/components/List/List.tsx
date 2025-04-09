"use client";

import React from "react";
import style from "./List.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PRIVATE_URL } from "@/config/url.config";
import { IReward } from "@/shared/types/reward.interface";

export default function List({
    data,
    card_className,
    list_className,
}: {
    data: IReward[];
    card_className?: string[];
    list_className?: string[];
}) {
    const router = useRouter();

    return (
        <div
            className={`${style["list"]} ${list_className
                ?.map((className) => `${style[`${className}`]}`)
                .join(" ")}`}
        >
            {data?.map((item, id) => (
                <div
                    key={id}
                    className={`${style["list__card"]} ${
                        style["card"]
                    } ${card_className
                        ?.map((className) => `${style[`${className}`]}`)
                        .join(" ")}`}
                    onClick={() =>
                        Object.hasOwn(item, "TypeReward")
                            ? router.push(PRIVATE_URL.awards(`/${item.id}`))
                            : router.push(PRIVATE_URL.teoria(`/${item.id}`))
                    }
                >
                    {/* {item?.lock === false && (
                        <Image
                            className={style["list__card-lock"]}
                            src={"/lock.svg"}
                            alt="закрыто"
                            width={120}
                            height={120}
                        />
                    )} */}

                    <Image
                        className={style["card__image"]}
                        src={
                            item?.url
                                ? `${process.env.SERVER_URL}/static/${item?.url}`
                                : "/paper.png"
                        }
                        alt="картинка"
                        fill
                        sizes="100%"
                    />
                    <div
                        className={`${style["card__title"]} text text_w-600 text_size-20`}
                    >
                        {item.name}
                    </div>
                </div>
            ))}
        </div>
    );
}

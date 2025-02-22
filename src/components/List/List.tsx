"use client";

import React from "react";
import style from "./List.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PRIVATE_URL } from "@/config/url.config";

export default function List({
    data,
    card_className,
    list_className,
}: {
    data: { title: string; url: string; lock?: boolean }[];
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
                        item.lock
                            ? router.push(PRIVATE_URL.awards(`/${id}`))
                            : router.push(PRIVATE_URL.teoria(`/${id}`))
                    }
                >
                    {item?.lock === false && (
                        <Image
                            className={style["list__card-lock"]}
                            src={"/lock.svg"}
                            alt="закрыто"
                            width={120}
                            height={120}
                        />
                    )}

                    <Image
                        src={item?.url || "/paper.png"}
                        alt="картинка"
                        fill
                        objectFit="contain"
                    />
                    <p
                        className={`${style["card__title"]} text text_w-600 text_size-20`}
                    >
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    );
}

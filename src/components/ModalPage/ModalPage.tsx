"use client";

import style from "./ModalPage.module.scss";
import React from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <div>
            <button
                className={style["modal"]}
                onClick={() => {
                    router.back();
                }}
            ></button>
            <div className={style["modal__content"]}>{children}</div>
        </div>
    );
}

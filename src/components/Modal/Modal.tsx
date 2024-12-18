"use client";

import style from "./Modal.module.scss";
import React from "react";
import { useRouter } from "next/navigation";
import { PRIVATE_URL } from "@/config/url.config";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <div>
            <button
                className={style["modal"]}
                onClick={() => {
                    router.push(PRIVATE_URL.home("", "STUDENT"));
                }}
            ></button>
            <div className={style["modal__content"]}>
                {children}
            </div>
        </div>
    );
}

"use client";
import { useRef } from "react";
import styles from "./ModalWindowAdd.module.scss";
// import { useOnClickOutside } from "usehooks-ts";

export default function ModalWindowAdd({
    children,
    // exit,
}: {
    children?: React.ReactNode;
    exit: () => void;
}) {
    const ref = useRef(null);
    // useOnClickOutside(ref, () => exit());
    return (
        <div className={styles["modal-window"]}>
            <div className={styles["modal-window__overlay"]}>
                <div className={styles["modal-window__content"]} ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    );
}

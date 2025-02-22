import React from "react";
import style from "./TestButton.module.scss";
export default function TestButton({
    onClick,
    children,
}: {
    onClick?: () => void;
    children?: React.ReactNode;
}) {
    return (
        <button className={style["button"]} onClick={onClick}>
            {children}
        </button>
    );
}

import React from "react";
import { PulseLoader } from "react-spinners";

import style from "./Loader.module.scss";

export default function Loader({
    color,
    modal,
}: {
    color?: string;
    modal?: boolean;
}) {
    return (
        <div className={`${style["loader"]} ${modal && style["loader_modal"]}`}>
            <PulseLoader color={color || "#171717"} />
        </div>
    );
}

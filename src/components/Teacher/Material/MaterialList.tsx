import { ITheoryMaterialModel } from "@/shared/interfaces/topic.interface";
import style from "./Material.module.scss";
import MaterialCard from "./MaterialCard";
import Image from "next/image";
import { useState } from "react";
import MaterialForm from "./MaterialForm";

export default function MaterialList({
    title,
    data,
    typeMaterial,
}: {
    title: string;
    data: ITheoryMaterialModel[];
    typeMaterial: "book" | "video" | "audio" | "image";
}) {
    const [add, setAdd] = useState<boolean>(false);

    return (
        <div className={style["material-list"]}>
            <h4 className={style["material-list__title"]}>{title}:</h4>
            <div className={style["material-list__content"]}>
                {data?.map((item) => (
                    <MaterialCard key={item.id} {...item} />
                ))}
                <button
                    className={style["material-list__add-button"]}
                    onClick={() => setAdd(true)}
                >
                    <Image src={"/plus.svg"} alt="+" width={17} height={17} />
                    Добавить {title}
                </button>
            </div>
            {add && (
                <MaterialForm
                    type="add"
                    handleClick={() => setAdd(false)}
                    typeMaterial={typeMaterial}
                ></MaterialForm>
            )}
        </div>
    );
}

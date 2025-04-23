import { ITheoryMaterialModel } from "@/shared/interfaces/topic.interface";
import style from "./Material.module.scss";
import MaterialCard from "./MaterialCard";
import Image from "next/image";

export default function MaterialList({
    title,
    data,
}: {
    title: string;
    data: ITheoryMaterialModel[];
}) {

    return (
        <div className={style["material-list"]}>
            <h4 className={style["material-list__title"]}>{title}:</h4>
            <div className={style["material-list__content"]}>
                {data.map((item) => (
                    <MaterialCard key={item.id} {...item} />
                ))}
                <button className={style["material-list__add-button"]}>
                    <Image src={"/plus.svg"} alt="+" width={17} height={17} />
                    Добавить {title}
                </button>
            </div>
        </div>
    );
}

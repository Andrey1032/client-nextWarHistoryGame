import { ITheoryMaterialModel } from "@/shared/interfaces/topic.interface";
import style from "./Material.module.scss";
import Image from "next/image";
import { useState } from "react";
import MaterialForm from "./MaterialForm";

export default function MaterialCard(material: ITheoryMaterialModel) {
    const [edit, setEdit] = useState<null | ITheoryMaterialModel>(null);
    const [check, setCheck] = useState<boolean>(false);

    return (
        <div className={style["material-card"]}>
            <button
                className={style["material-card__used-button"]}
                onClick={() => setCheck((check) => !check)}
            >
                {check ? (
                    <Image
                        src="/check-circle.svg"
                        alt="используется"
                        width={20}
                        height={20}
                    />
                ) : (
                    <Image
                        src="/circle.svg"
                        alt="не используется"
                        width={20}
                        height={20}
                    />
                )}
            </button>
            <p className={style["material-card__title"]}>
                {material.description}
            </p>
            <div className={style["material-card__options"]}>
                <Image
                    className={style["material-card__edit"]}
                    src="/edit-pencil.svg"
                    alt="Редактировать"
                    width={20}
                    height={20}
                    onClick={() => setEdit(material)}
                />
                <Image
                    className={style["material-card__del"]}
                    src="/delete.svg"
                    alt="Удалить"
                    width={20}
                    height={20}
                />
            </div>

            {edit !== null && (
                <MaterialForm
                    item={edit}
                    handleClick={() => setEdit(null)}
                    type="edit"
                />
            )}
        </div>
    );
}

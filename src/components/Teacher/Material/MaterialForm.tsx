import { ITheoryMaterialModel } from "@/shared/interfaces/topic.interface";
import style from "./Material.module.scss";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";

export default function MaterialForm({
    item,
    handleClick,
    type,
}: {
    item?: ITheoryMaterialModel;
    handleClick: () => void;
    type: "add" | "edit";
}) {
    switch (type) {
        case "add":
            return (
                <ModalWindowAdd>
                    <div className={style["material-form"]}>
                        <form action="">
                            <input
                                type="text"
                                placeholder="Описание материала"
                            />
                            <input type="file" placeholder="Аудио файл"/>
                            <div>
                                <button
                                    type="submit"
                                    onClick={() => handleClick()}
                                >
                                    Сохранить
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleClick()}
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </ModalWindowAdd>
            );
        case "edit":
            return (
                <ModalWindowAdd>
                    <div className={style["material-form"]}>
                        <form action="">
                            <input
                                type="text"
                                placeholder=""
                                value={item.description}
                            />
                            <input type="audio" />
                            <div>
                                <button
                                    type="submit"
                                    onClick={() => handleClick()}
                                >
                                    Сохранить
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleClick()}
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </ModalWindowAdd>
            );

        default:
            return null;
    }
}

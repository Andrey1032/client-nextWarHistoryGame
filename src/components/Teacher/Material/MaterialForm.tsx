import { ITheoryMaterialModel } from "@/shared/interfaces/topic.interface";
import style from "./Material.module.scss";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";

const createTitle = (typeMaterial: string): string => {
    switch (typeMaterial) {
        case "book":
            return "текстового материала";
        case "video":
            return "видео материала";
        case "audio":
            return "аудио материала";
        case "image":
            return "графического материала";
        default:
            return "";
    }
};

export default function MaterialForm({
    item,
    handleClick,
    type,
    typeMaterial,
}: {
    item?: ITheoryMaterialModel;
    handleClick: () => void;
    type: "add" | "edit";
    typeMaterial?: "book" | "video" | "audio" | "image";
}) {
    switch (type) {
        case "add":
            return (
                <ModalWindowAdd>
                    <div className={style["material-form"]}>
                        <h4 className={style["material-form_title"]}>
                            Форма добавления {createTitle(String(typeMaterial))}
                        </h4>
                        <form className={style["material-form__form"]}>
                            <input
                                className={style["material-form__form-input"]}
                                type="text"
                                placeholder="Описание материала"
                            />
                            <input
                                className={style["material-form__form-input"]}
                                type="file"
                                placeholder="Аудио файл"
                            />
                            <div
                                className={style["material-form__form-buttons"]}
                            >
                                <button
                                    className={
                                        style["material-form__form-button"]
                                    }
                                    type="submit"
                                    onClick={() => handleClick()}
                                >
                                    Сохранить
                                </button>
                                <button
                                    className={
                                        style["material-form__form-button"]
                                    }
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
                        <h4 className={style["material-form_title"]}>
                            Форма изменения материала
                        </h4>
                        <form className={style["material-form__form"]}>
                            <input
                                className={style["material-form__form-input"]}
                                type="text"
                                placeholder="Описание материала"
                                value={item?.description}
                                onChange={() => {}}
                            />
                            <input
                                className={style["material-form__form-input"]}
                                type="file"
                                placeholder="Аудио файл"
                            />
                            <div
                                className={style["material-form__form-buttons"]}
                            >
                                <button
                                    className={
                                        style["material-form__form-button"]
                                    }
                                    type="submit"
                                    onClick={() => handleClick()}
                                >
                                    Сохранить
                                </button>
                                <button
                                    className={
                                        style["material-form__form-button"]
                                    }
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

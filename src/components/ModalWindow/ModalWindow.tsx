import style from "./ModalWindow.module.scss";

export default function ModalWindow({
    children,
}: {
    children?: React.ReactNode;
}) {
    return <div className={style["modal-window"]}>{children}</div>;
}

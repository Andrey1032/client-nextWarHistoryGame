import styles from "./ModalWindowAdd.module.scss";

export default function ModalWindowAdd({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <div className={styles["modal-window"]}>
            <div className={styles["modal-window__overlay"]}>
                <div className={styles["modal-window__content"]}>
                    {children}
                </div>
            </div>
        </div>
    );
}

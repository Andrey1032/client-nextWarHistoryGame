import Image from "next/image";
import React, { useState } from "react";
import styles from "./QuestionForm.module.scss";

export default function QuestionFields() {
    const [trueAnswer, setTrueAnswer] = useState<null | number>(null);

    return (
        <div className={styles["question-form"]}>
            <div className={styles["question-form__item"]}>
                <p>Текст ответа</p>
                <p>Изображение к ответу</p>
                <p>Верный ответ</p>
            </div>
            <div className={styles["question-form__item"]}>
                <input type="text" />
                <input type="file" />я
                <div onClick={() => setTrueAnswer(1)}>
                    {trueAnswer === 1 ? (
                        <Image
                            src="/check-circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    ) : (
                        <Image
                            src="/circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    )}
                </div>
            </div>
            <div className={styles["question-form__item"]}>
                <input type="text" />
                <input type="file" />
                <div onClick={() => setTrueAnswer(2)}>
                    {trueAnswer === 2 ? (
                        <Image
                            src="/check-circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    ) : (
                        <Image
                            src="/circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    )}
                </div>
            </div>
            <div className={styles["question-form__item"]}>
                <input type="text" />
                <input type="file" />
                <div onClick={() => setTrueAnswer(3)}>
                    {trueAnswer === 3 ? (
                        <Image
                            src="/check-circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    ) : (
                        <Image
                            src="/circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    )}
                </div>
            </div>
            <div className={styles["question-form__item"]}>
                <input type="text" />
                <input type="file" />
                <div onClick={() => setTrueAnswer(4)}>
                    {trueAnswer === 4 ? (
                        <Image
                            src="/check-circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    ) : (
                        <Image
                            src="/circle.svg"
                            alt="ответ"
                            width={20}
                            height={20}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

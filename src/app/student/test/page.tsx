"use client";
import React, { useState } from "react";
import style from "@/styles/Test.module.scss";
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import TestFields from "@/components/Test/TestFields";
import { IQuestionModel } from "@/shared/interfaces/question.interface";
import TestButton from "@/components/ui/Form/form-elements/TestButton/TestButton";
import { testsData, trueAnswers } from "./data";

export default function Page() {
    const [testIndex, setTestIndex] = useState<number>(0);
    const [tests] = useState<IQuestionModel[]>(testsData);
    return (
        <ModalWindow>
            {testIndex < tests.length ? (
                <TestFields
                    test={tests[testIndex]}
                    setTest={() => setTestIndex((testIndex) => ++testIndex)}
                />
            ) : (
                <TestResult></TestResult>
            )}
        </ModalWindow>
    );
}

const TestResult = () => {
    const [models2] = useState(trueAnswers);
    return (
        <div className={style["result-page"]}>
            <h3 className={style["result-page__title"]}>
                Результат тестирования
            </h3>
            <div className={style["result-page__body"]}>
                <div>
                    <h4>
                        Тема: &quot;Начало Великой Отечественной войны&quot;
                    </h4>
                    <h4>
                        Дата тестирования:{" "}
                        {new Date().toLocaleString().slice(0, 10)}
                    </h4>
                </div>
                <h4>Кол-во правльных ответов: {(600/7).toFixed(1)}%</h4>

                <h4>Рейтинг: &quot;100&quot;</h4>
            </div>
            <div className={style["result-page__table"]}>
                <div className={style["result-page__table-item"]}>
                    <p>Текст вопроса</p>
                    <p>Ответ обучающегося</p>
                    <p>Правильность</p>
                </div>
                {models2?.map((model) => (
                    <div
                        key={model.id}
                        className={style["result-page__table-item"]}
                    >
                        <p>{model?.text}</p>
                        <p>{model?.answer}</p>
                        <p
                            className={`${
                                Boolean(model?.true_answer)
                                    ? style["true-answ"]
                                    : style["false-answ"]
                            }`}
                        >
                            {Boolean(model?.true_answer) ? "+" : "-"}
                        </p>
                    </div>
                ))}
            </div>
            <TestButton>Завершить тестирование</TestButton>
        </div>
    );
};

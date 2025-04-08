"use client";

import style from "@/styles/ModelEducation.module.scss";
import { useEffect, useState } from "react";

interface IModelInput {
    name: string;
    koef: string;
    temp: string;
    stepen: string;
    iter: string;
}

interface IModel {
    id: string | number;
    name: string;
    value: number;
    error: number;
}

interface IModel2 {
    id: string | number;
    text: string;
    shablon: string;
    answer: string;
    epsilon: string;
    epsilonMin: string;
    response: string;
    attempt: string;
}
export default function Page() {
    const [models, setModels] = useState<IModel[]>([
        { id: 1, name: "Модель 1", value: 95, error: 0.67 },
        { id: 2, name: "Модель 2", value: 110, error: 0.94 },
    ]);
    const [models2, setModels2] = useState<IModel2[]>([
        {
            id: 1,
            text: "Когда началась Великая Отечественная война?",
            shablon: "22 июня 1941 года",
            answer: "22 июня 1941 год",
            epsilon: "90%",
            epsilonMin: "75%",
            response: "распознано",
            attempt: "1",
        },
        {
            id: 2,
            text: "Когда началась Великая Отечественная война?",
            shablon: "22 июня 1941 года",
            answer: "22 июня 1941 года.",
            epsilon: "98%",
            epsilonMin: "75%",
            response: "распознано",
            attempt: "2",
        },
    ]);
    const [inputs, setInputs] = useState<IModelInput>({
        name: "",
        koef: "0",
        temp: "0",
        stepen: "0",
        iter: "100",
    });

    useEffect(() => {}, [inputs]);
    return (
        <div className={style["model-education"]}>
            <h4>Форма добавления модели нейронной сетя для расчета рейтинга</h4>
            <form
                onSubmit={() => {
                    if (+inputs.iter < 100)
                        alert("Кол-во итераций должно быть больше 100");
                }}
                className={style["model-education__form"]}
            >
                <input
                    required
                    type="text"
                    placeholder="Название модели"
                    value={inputs.name}
                    onChange={(e) =>
                        setInputs({ ...inputs, name: e.target.value })
                    }
                />
                <div className={style["model-education__form-settings"]}>
                    <h5>параметры сети:</h5>
                    <div
                        className={
                            style["model-education__form-settings-input"]
                        }
                    >
                        <input
                            required
                            type="text"
                            placeholder="коэф. обучения"
                            value={inputs.koef}
                            onChange={(e) => {
                                if (
                                    +e.target.value >= 0 ||
                                    e.target.value === ""
                                )
                                    setInputs({
                                        ...inputs,
                                        koef: e.target.value,
                                    });
                            }}
                        />
                        <input
                            required
                            type="text"
                            placeholder="темп обучения"
                            value={inputs.temp}
                            onChange={(e) => {
                                if (
                                    +e.target.value >= 0 ||
                                    e.target.value === ""
                                )
                                    setInputs({
                                        ...inputs,
                                        temp: e.target.value,
                                    });
                            }}
                        />
                        <input
                            required
                            type="text"
                            placeholder="степень устойчивости"
                            value={inputs.stepen}
                            onChange={(e) => {
                                if (
                                    +e.target.value >= 0 ||
                                    e.target.value === ""
                                )
                                    setInputs({
                                        ...inputs,
                                        stepen: e.target.value,
                                    });
                            }}
                        />
                        <input
                            required
                            type="number"
                            min={100}
                            placeholder="кол-во итераций"
                            value={inputs.iter}
                            onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    iter: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>

                <div className={style["model-education__form-buttons"]}>
                    <button type="submit" className="positive">
                        Сохранить
                    </button>
                </div>
            </form>
            <h4>Рассчет нейронной сети:</h4>
            <div className={style["model-education__table"]}>
                <div className={style["model-education__table-item"]}>
                    <p>название модели</p>
                    <p>расчет</p>
                    <p>ошибка</p>
                </div>

                {models?.map((model) => (
                    <div
                        key={model.id}
                        className={style["model-education__table-item"]}
                    >
                        <p>{model?.name}</p>
                        <p>{model?.value}</p>
                        <p>{model?.error}</p>
                    </div>
                ))}
            </div>

            <h4>
                Результат распознавания голосовых ответов обучающихся речевой
                нейронной сетью:
            </h4>
            <div>
                <h5>
                    Дисциплина: &quot;История Великой Отечественной войны&quot;
                </h5>
                <h5>Тема: &quot;Начало Великой Отечественной войны&quot;</h5>
                <h5>Дисциплина: &quot;История ВОВ&quot;</h5>
                <h5>Группа: &quot;22РПИ&quot;</h5>
                <h5>Обучающийся: &quot;Георгий Геогриевич&quot;</h5>
                <h5>Дата: {new Date().toLocaleString()}</h5>
            </div>
            <div className={style["model-education__table"]}>
                <div className={style["model-education__table-item"]}>
                    <p>текст вопроса</p>
                    <p>Шаблон</p>
                    <p>ответ</p>
                    <p>точность</p>
                    <p>Мин. точность</p>
                    <p>Шкала распознавния</p>
                    <p>Попытка</p>
                </div>
                {models2?.map((model) => (
                    <div
                        key={model.id}
                        className={style["model-education__table-item"]}
                    >
                        <p>{model?.text}</p>
                        <p>{model?.shablon}</p>
                        <p>{model?.answer}</p>
                        <p>{model?.epsilon}</p>
                        <p>{model?.epsilonMin}</p>
                        <p>{model?.response}</p>
                        <p>{model?.attempt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

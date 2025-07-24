"use client";

import { trueAnswers } from "@/app/student/test/data";
import style from "@/styles/ModelEducation.module.scss";
// import Image from "next/image";
import { useState } from "react";

// interface IModelInput {
//     name: string;
//     koef: string;
//     temp: string;
//     stepen: string;
//     iter: string;
// }

// interface IModel {
//     id: string | number;
//     name: string;
//     value: number;
//     error: number;
//     koef: number;
//     speed: number;
// }

interface IModel2 {
    id: string | number;
    text: string;
    answer: string;
    true_answer: string | null;
}
export default function Page() {
    const [models2] = useState<IModel2[]>(trueAnswers);
    return (
        <div className={style["model-education"]}>
            {/* <Lena></Lena> */}

            <h3>Отчет по тестированию:</h3>
            <div>
                <h4>
                    Дисциплина: &quot;История Великой Отечественной войны&quot;
                </h4>

                <h4>Тема: &quot;Начало Великой Отечественной войны&quot;</h4>

                <h4>
                    Обучающийся:{" "}
                    <select name="student" id="1">
                        <option value="1">Георгий Георгиевич</option>
                        <option value="2">Иван Охлобысти</option>
                        <option value="3">Александр Сашко</option>
                    </select>
                </h4>

                <h4>
                    Дата тестирования:{" "}
                    {new Date().toLocaleString().slice(0, 10)}
                </h4>
            </div>
            <h4>Кол-во правльных ответов: 80%</h4>
            
            <h4>Рейтинг: &quot;100&quot;</h4>
            <div className={style["model-education__table"]}>
                <div className={style["model-education__table-item"]}>
                    <p>Текст вопроса</p>
                    <p>Ответ обучающегося</p>
                    <p>Правильность</p>
                </div>
                {models2?.map((model) => (
                    <div
                        key={model.id}
                        className={style["model-education__table-item"]}
                    >
                        <p>{model?.text}</p>
                        <p>{model?.answer}</p>
                        <p>{Boolean(model?.true_answer) ? "+" : "-"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// const Lena = () => {
//     const [models, setModels] = useState<IModel[]>([
//         {
//             id: 1,
//             name: "Модель 1",
//             value: 1000,
//             error: 0.57,
//             koef: 0.2,
//             speed: 0.0001,
//         },
//         {
//             id: 1,
//             name: "Модель 2",
//             value: 2000,
//             error: 0.94,
//             koef: 0.5,
//             speed: 0.005,
//         },
//         {
//             id: 1,
//             name: "Модель 3",
//             value: 2500,
//             error: 1.0,
//             koef: 0.4,
//             speed: 0.00001,
//         },
//     ]);

//     const [inputs, setInputs] = useState<IModelInput>({
//         name: "",
//         koef: "0",
//         temp: "0",
//         stepen: "0",
//         iter: "100",
//     });

//     return (
//         <>
//             <h4>Форма добавления модели нейронной сетя для расчета рейтинга</h4>
//             <form
//                 onSubmit={() => {
//                     if (+inputs.iter < 100)
//                         alert("Кол-во итераций должно быть больше 100");
//                 }}
//                 className={style["model-education__form"]}
//             >
//                 <input
//                     required
//                     type="text"
//                     placeholder="Название модели"
//                     value={inputs.name}
//                     onChange={(e) =>
//                         setInputs({ ...inputs, name: e.target.value })
//                     }
//                 />
//                 <div className={style["model-education__form-settings"]}>
//                     <h5>параметры сети:</h5>
//                     <div
//                         className={
//                             style["model-education__form-settings-input"]
//                         }
//                     >
//                         <div>
//                             <label>Коэф. крутизны: </label>
//                             <input
//                                 required
//                                 type="text"
//                                 placeholder="коэф. обучения"
//                                 value={inputs.koef}
//                                 onChange={(e) => {
//                                     if (
//                                         +e.target.value >= 0 ||
//                                         e.target.value === ""
//                                     )
//                                         setInputs({
//                                             ...inputs,
//                                             koef: e.target.value,
//                                         });
//                                 }}
//                             />
//                         </div>
//                         <div>
//                             <label>
//                                 Скорость обучения:{" "}
//                                 <input
//                                     required
//                                     type="text"
//                                     placeholder="темп обучения"
//                                     value={inputs.temp}
//                                     onChange={(e) => {
//                                         if (
//                                             +e.target.value >= 0 ||
//                                             e.target.value === ""
//                                         )
//                                             setInputs({
//                                                 ...inputs,
//                                                 temp: e.target.value,
//                                             });
//                                     }}
//                                 />
//                             </label>
//                         </div>
//                         <div>
//                             <label>
//                                 Кол-во итераций обучения:{" "}
//                                 <input
//                                     required
//                                     type="number"
//                                     min={100}
//                                     placeholder="кол-во итераций"
//                                     value={inputs.iter}
//                                     onChange={(e) => {
//                                         setInputs({
//                                             ...inputs,
//                                             iter: e.target.value,
//                                         });
//                                     }}
//                                 />
//                             </label>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={style["model-education__form-buttons"]}>
//                     <button type="submit" className="positive">
//                         Обучить нейронную сеть
//                     </button>
//                 </div>
//             </form>
//             <h4>Информация о моделях нейронной сети:</h4>
//             <div className={style["model-education__table"]}>
//                 <div className={style["model-education__table-item"]}>
//                     <p>Название модели</p>
//                     <p>Средняя ошибка</p>
//                     <p>Коэффициент крутизны</p>
//                     <p>Скорость обучения</p>
//                     <p>Кол-во итерация</p>
//                 </div>

//                 {models?.map((model) => (
//                     <div
//                         key={model.id}
//                         className={style["model-education__table-item"]}
//                     >
//                         <p>{model?.name}</p>
//                         <p>{model?.error}</p>
//                         <p>{model?.koef}</p>
//                         <p>{model?.speed}</p>
//                         <p>{model?.value}</p>
//                     </div>
//                 ))}
//             </div>
//             <h4>Расчет рейтинга пользователя</h4>
//             <h5>Результат пользователя</h5>
//             <div className={style["model-education__table"]}>
//                 <div className={style["model-education__table-item"]}>
//                     <p>Идентификатор пользователя</p>
//                     <p>Тема тестирования</p>
//                     <p>Дата тестирования</p>
//                     <p>Время тестирования</p>
//                     <p>Число правильных ответов</p>
//                     <p>Число неправильных ответов</p>
//                     <p>Предыдущий рейтинг</p>
//                 </div>
//                 <div className={style["model-education__table-item"]}>
//                     <p>1</p>
//                     <p>Битва под Москвой</p>
//                     <p>25.04.2025</p>
//                     <p>7:50</p>
//                     <p>7</p>
//                     <p>3</p>
//                     <p>100</p>
//                 </div>
//             </div>
//             <h5>Расчет рейтинга на основе НС</h5>
//             <div className={style["model-education__table"]}>
//                 <div className={style["model-education__table-item"]}>
//                     <p>Модель НС</p>
//                     <p>Выбрнная НС</p>
//                     <p>Рейтинг (расчет НС)</p>
//                     <p>Подобранные темы</p>
//                 </div>
//                 <div className={style["model-education__table-item"]}>
//                     <p>Модель НС 1</p>
//                     <p>
//                         <Image
//                             className={
//                                 style["model-education__table-item-check"]
//                             }
//                             src={"/check-circle.svg"}
//                             width={20}
//                             height={20}
//                             alt=""
//                         />
//                     </p>
//                     <p>110</p>
//                     <p>Оборона Смоленска</p>
//                 </div>
//                 <div className={style["model-education__table-item"]}>
//                     <p>Модель НС 2</p>
//                     <p>
//                         <Image
//                             className={
//                                 style["model-education__table-item-check"]
//                             }
//                             src={"/circle.svg"}
//                             width={20}
//                             height={20}
//                             alt=""
//                         />
//                     </p>
//                     <p>102</p>
//                     <p>Битва под Москвой</p>
//                 </div>
//                 <div className={style["model-education__table-item"]}>
//                     <p>Модель НС 3</p>
//                     <p>
//                         <Image
//                             className={
//                                 style["model-education__table-item-check"]
//                             }
//                             src={"/circle.svg"}
//                             width={20}
//                             height={20}
//                             alt=""
//                         />
//                     </p>
//                     <p>95</p>
//                     <p>Начало ВОВ</p>
//                 </div>
//             </div>
//         </>
//     );
// };

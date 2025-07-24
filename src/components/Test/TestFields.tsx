"use client";

import Image from "next/image";
import React, { useState } from "react";
import SpeachToTextComponent from "../SpeachToTextComponent/SpeachToTextComponent";
import style from "@/styles/Test.module.scss";
import { IQuestionModel } from "@/shared/interfaces/question.interface";
import TestButton from "../ui/Form/form-elements/TestButton/TestButton";
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

export default function TestFields({
    test,
    setTest,
}: {
    test: IQuestionModel;
    setTest: () => void;
}) {
    const [selectAnswer, setSelectAnswer] = useState<number | null>(null);
    const [items, setItems] = useState(test?.Answer);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    switch (test?.TypeMiniGame?.id) {
        case 4:
            return (
                <div className={style["test"]}>
                    <Image
                        className={style["test__image"]}
                        src="/personaj.png"
                        alt=""
                        width={1000}
                        height={1000}
                        style={{ width: "40%", height: "100%" }}
                    />
                    <div className={style["test__content"]}>
                        <div className={style["test__question"]}>
                            {test.text}
                        </div>
                        <div className={style["test__answers"]}>
                            {test?.Answer?.map((answer, id) => (
                                <div
                                    className={`${style["test__answer"]} ${
                                        answer?.FileAnswer === null &&
                                        style["test__answer_noimg"]
                                    }`}
                                    key={answer.id}
                                    onClick={() => setSelectAnswer(id)}
                                >
                                    {answer?.FileAnswer !== null && (
                                        <Image
                                            src={answer?.FileAnswer.url}
                                            alt=""
                                            width={150}
                                            height={150}
                                        />
                                    )}
                                    <p>{answer.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className={style["test__response"]}>
                            <SpeachToTextComponent
                                answers={test?.Answer}
                                defaultValue={
                                    selectAnswer !== null
                                        ? test.Answer[selectAnswer].text
                                        : null
                                }
                                // setTest={() => setTest()}
                            />
                        </div>
                    </div>
                </div>
            );
        case 5:
            return (
                <>
                    <Image
                        className={style["test__image"]}
                        src="/personaj.png"
                        alt=""
                        width={1000}
                        height={1000}
                        style={{ width: "40%", height: "100%" }}
                    />
                    <div className={style["test__content"]}>
                        <div className={style["test__question"]}>
                            {test.text}
                        </div>

                        <div className={style["test__response"]}>
                            <SpeachToTextComponent
                                defaultValue={
                                    selectAnswer !== null
                                        ? test.Answer[selectAnswer].text
                                        : null
                                }
                            />
                            <TestButton onClick={setTest}>
                                К следующему вопросу
                            </TestButton>
                        </div>
                    </div>
                </>
            );
        case 6:
            return (
                <div className={style["test__content"]}>
                    <div className={style["test__question"]}>{test.text}</div>
                    <div
                        className={`${style["test__answers"]} ${style["test__answers_sortable"]}`}
                    >
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                        >
                            <SortableContext
                                items={items}
                                strategy={horizontalListSortingStrategy}
                            >
                                {items.map((answer) => (
                                    <SortableItem
                                        key={answer.id}
                                        id={answer.id}
                                        answer={answer}
                                    />
                                ))}
                            </SortableContext>
                        </DndContext>
                    </div>
                    <div className={style["test__response"]}>
                        <TestButton onClick={setTest}>
                            К следующему вопросу
                        </TestButton>
                    </div>
                </div>
            );

        case 3:
        case 7:
            return (
                <div className={style["test__content"]}>
                    <div className={style["test__question"]}>{test.text}</div>
                    <div
                        className={`${style["test__answers"]} ${style["test__answers_sortable"]}`}
                    ></div>
                    <div className={style["test__response"]}>
                        <TestButton onClick={setTest}>
                            К следующему вопросу
                        </TestButton>
                    </div>
                </div>
            );
    }
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over === null) return;

        const activeId = active.id;
        const overId = over.id;
        console.log(activeId);
        if (active.id !== over.id) {
            setItems((items) => {
                const activeIndex = items.findIndex(
                    (items) => items.id === activeId
                );
                const overIndex = items.findIndex(
                    (items) => items.id === overId
                );

                return arrayMove(items, activeIndex, overIndex);
            });
        }
    }
}

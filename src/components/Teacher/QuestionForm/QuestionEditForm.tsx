"use client";
import ModalWindowAdd from "@/components/ModalWindowAdd/ModalWindowAdd";
import style from "./QuestionForm.module.scss";
import { IQuestionModel } from "@/shared/interfaces/question.interface";
import { useQuestionForm } from "@/hooks/useQuestionForm";
import Loader from "@/components/Loader/Loader";
import { Controller } from "react-hook-form";
import { teacherService } from "@/services/teacher.service";
import { teoriaService } from "@/services/teoria.service";
import { ITopicModel } from "@/shared/interfaces/topic.interface";

export default function QuestionEditForm({
    question,
    exitMode,
}: {
    question: IQuestionModel;
    exitMode: () => void;
}) {
    const { onSubmit, form, isSubmitting } = useQuestionForm({
        question: question,
        type: "edit",
    });
    const {
        data: dataTopicies,
        loading: loadingTopicies,
    }: {
        data: { getTopicAll: ITopicModel[] };
        loading: boolean;
    } = teoriaService.getTopicies();

    const {
        data: dataTypeTasks,
        loading: loadingTypeTasks,
    }: {
        data: { getTypeTaskAll: { id: number; name: string }[] };
        loading: boolean;
    } = teacherService.getTypeTask();

    console.log(question);
    return (
        <ModalWindowAdd exit={exitMode}>
            <div>
                {!isSubmitting && !loadingTopicies && !loadingTypeTasks ? (
                    <>
                        <h4>Форма редактирования вопроса</h4>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className={style["question-form"]}
                        >
                            <Controller
                                control={form.control}
                                name="text"
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Текст вопроса"
                                        className={
                                            style["question-form__controller"]
                                        }
                                    />
                                )}
                            />
                            <Controller
                                control={form.control}
                                name="typeTaskId"
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        value={question?.typeTaskId}
                                        className={
                                            style["question-form__controller"]
                                        }
                                    >
                                        <option value="0" disabled>
                                            Выберете тип задания
                                        </option>
                                        {dataTypeTasks.getTypeTaskAll?.map(
                                            (type) => (
                                                <option
                                                    key={type.id}
                                                    value={type.id}
                                                >
                                                    {type.name}
                                                </option>
                                            )
                                        )}
                                    </select>
                                )}
                            />
                            <Controller
                                control={form.control}
                                name="topicId"
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        value={question?.topicId}
                                        className={
                                            style["question-form__controller"]
                                        }
                                    >
                                        <option value="0" disabled>
                                            Выберете тему
                                        </option>
                                        {dataTopicies.getTopicAll?.map(
                                            (topic) => (
                                                <option
                                                    key={topic.id}
                                                    value={topic.id}
                                                >
                                                    {topic.name}
                                                </option>
                                            )
                                        )}
                                    </select>
                                )}
                            />
                            <div className={style["question-form__buttons"]}>
                                <button
                                    type="submit"
                                    className={` form-button hover-green`}
                                >
                                    Сохранить
                                </button>
                                <button
                                    type="button"
                                    className={` form-button hover-red`}
                                    onClick={exitMode}
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <Loader />
                )}
            </div>
        </ModalWindowAdd>
    );
}

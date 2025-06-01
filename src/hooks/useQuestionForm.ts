"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { teacherService } from "@/services/teacher.service";
import { IQuestionModel } from "@/shared/interfaces/question.interface";

interface IQuestionEditForm {
    text: string;
    topicId: number;
    typeTaskId: number;
}

interface IQuestionAddForm {
    text: string;
    typeMiniGame: number;
    typeTask: number;
}

export function useQuestionForm({
    question,
    type,
}: {
    question?: IQuestionModel;
    type: "add" | "edit";
}) {
    const { editQuestion } = teacherService.updateQuestion();

    const editForm = useForm<IQuestionEditForm>({
        defaultValues: {
            text: question?.text,
            topicId: Number(question?.topicId),
            typeTaskId: Number(question?.typeTaskId),
        },
        mode: "onSubmit",
    });

    const editOnSubmit: SubmitHandler<IQuestionEditForm> = ({
        text,
        topicId,
        typeTaskId,
    }) => {
        editQuestion({
            variables: {
                updateQuestionId: question?.id,
                updateQuestionData: {
                    text: text,
                    topicId: Number(topicId),
                    typeTaskId: Number(typeTaskId),
                },
            },
        });
    };
    
    //ADD
    const addForm = useForm<IQuestionEditForm>({
        defaultValues: {},
        mode: "onSubmit",
    });
    const addOnSubmit: SubmitHandler<IQuestionEditForm> = () => {};

    return {
        onSubmit: type === "edit" ? editOnSubmit : addOnSubmit,
        form: type === "edit" ? editForm : addForm,
        isSubmitting:
            type === "edit"
                ? editForm.formState.isSubmitting
                : addForm.formState.isSubmitting,
    };
}

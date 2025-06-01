"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { teoriaService } from "@/services/teoria.service";
import { ISubtopicModel } from "@/shared/interfaces/topic.interface";

interface ISubtopicForm {
    name: string;
}

export function useSubtopicForm({
    id,
    exitMode,
}: {
    id: number;
    exitMode: () => void;
}) {
    const { addSubtopic } = teoriaService.createSubtopic(exitMode);

    const form = useForm<ISubtopicModel>({
        defaultValues: {
            name: "",
        },
        mode: "onSubmit",
    });

    const onSubmit: SubmitHandler<ISubtopicForm> = ({ name }) => {
        addSubtopic({ variables: { name: name, id: id } });
        exitMode();
    };

    return { onSubmit, form, isSubmitting: form.formState.isSubmitting };
}

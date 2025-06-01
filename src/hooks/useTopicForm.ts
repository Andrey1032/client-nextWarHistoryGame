"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { teoriaService } from "@/services/teoria.service";

interface ITopicForm {
    name: string;
    
}

export function useTopicForm() {
    const { addTopic } = teoriaService.createTopic();

    const form = useForm<ITopicForm>({
        defaultValues: {
            name: "",
        },
        mode: "onSubmit",
    });

    const onSubmit: SubmitHandler<ITopicForm> = ({ name }) => {
        addTopic({ variables: { name: name } });
    };

    return { onSubmit, form, isSubmitting: form.formState.isSubmitting };
}

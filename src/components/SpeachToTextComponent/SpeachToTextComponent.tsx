"use client";

import "regenerator-runtime/runtime";

import React, { useEffect, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import TestButton from "../ui/Form/form-elements/TestButton/TestButton";

const SpeachToTextComponent = ({
    defaultValue,
}: {
    defaultValue: string | null;
}) => {
    const [userAnsw, setUserAnsw] = useState(defaultValue);

    useEffect(() => {
        setUserAnsw(defaultValue);
    }, [defaultValue]);

    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const startListening = () =>
        SpeechRecognition.startListening({ continuous: true });

    useEffect(() => {
        setUserAnsw(transcript);
        SpeechRecognition.stopListening();
    }, [transcript]);

    return (
        <div>
            <p>
                Ваш ответ:{" "}
                <span style={{ textDecoration: "underline" }}>
                    {userAnsw || "_____________"}
                </span>{" "}
                <TestButton
                    onClick={() => {
                        resetTranscript();
                        startListening();
                    }}
                >
                    {!listening ? "Ответить" : "идет запись"}
                </TestButton>
            </p>
        </div>
    );
};

export default SpeachToTextComponent;

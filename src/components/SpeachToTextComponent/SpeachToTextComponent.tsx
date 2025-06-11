"use client";

import "regenerator-runtime/runtime";

import React, { useEffect, useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
// import TestButton from "../ui/Form/form-elements/TestButton/TestButton";
// import useDebounce from "@/hooks/useDebounce";
import { IAnswerModel } from "@/shared/interfaces/question.interface";

import levenshtein from "fast-levenshtein";

const SpeachToTextComponent = ({
    answers,
    defaultValue,
}: {
    answers?: IAnswerModel[];
    defaultValue: string | null;
}) => {
    const [userAnsw, setUserAnsw] = useState(defaultValue);
    function compare(str: string, arr: IAnswerModel[]) {
        return arr.sort(
            (a, b) =>
                levenshtein.get(str, a.text) - levenshtein.get(str, b.text)
        )[0].text;
    }
    const commands = [
        {
            command: "ответ *",
            callback: (str: string) => {
                if (answers) {
                    setUserAnsw(`${compare(str, answers)}`);
                } else {
                    setUserAnsw(`${str.slice(0, -1)}`);
                }
            },
        },
    ];

    const { listening } = useSpeechRecognition({
        commands,
    });
    // const startListening = () =>
    //     SpeechRecognition.startListening({ continuous: true });

    // const delayUserAnsw = useDebounce(transcript, 2000);

    // useEffect(() => {
    //     if (delayUserAnsw !== null) SpeechRecognition.stopListening();
    // }, [delayUserAnsw]);

    // useEffect(() => {
    //     setUserAnsw(transcript);
    // }, [transcript]);

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true });
        setUserAnsw(defaultValue);
    }, [defaultValue]);

    return (
        <div>
            <p>
                Ваш ответ:{" "}
                <span style={{ textDecoration: "underline" }}>
                    {userAnsw || "_____________"}
                </span>{" "}
                {/* <TestButton
                    // onClick={() => {
                    //     resetTranscript();
                    //     startListening();
                    // }}
                >
                    {!listening ? "Ответить" : "Идет запись: "}
                </TestButton> */}
                (Произнесите &quot;Ответ: [ваш ответ]&quot;)
            </p>
        </div>
    );
};

export default SpeachToTextComponent;

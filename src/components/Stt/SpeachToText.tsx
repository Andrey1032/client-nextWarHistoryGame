"use client";

import { useSTT } from "@/hooks/useSTT";
import React from "react";

const SpeachToText = () => {
    const { isSpeak, startSpeak, transcript, resetSpeak } = useSTT();
    return (
        <div>
            <button
                onClick={() => {
                    resetSpeak();
                    startSpeak();
                }}
            >
                Ответить
            </button>
            <span>{isSpeak ? "Идет запись" : transcript}</span>
        </div>
    );
};

export default SpeachToText;

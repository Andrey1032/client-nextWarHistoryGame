"use client";
import React from "react";
import { useVoiceToText } from "react-speakup";

const VoiceToTextComponent = () => {
    const { startListening, transcript, reset } = useVoiceToText({
        lang: "ru-RU",
        continuous: false,
    });


    return (
        <div>
            <button
                onClick={() => {
                    reset();
                    startListening();
                }}
            >
                Ответить
            </button>
            <span>{transcript}</span>
        </div>
    );
};

export default VoiceToTextComponent;

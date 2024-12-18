"use client";

import { useEffect, useState } from "react";
import { useVoiceToText } from "react-speakup";

export function useSTT() {
    const [isSpeak, setIsSpeak] = useState(false);

    const { startListening, transcript, reset } = useVoiceToText({
        lang: "ru-RU",
        continuous: false,
    });

    const startSpeak = () => {
        setIsSpeak(true);
        try {
            startListening();
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        setIsSpeak(false);
    }, [transcript]);

    return { isSpeak, startSpeak, transcript, resetSpeak: reset };
}

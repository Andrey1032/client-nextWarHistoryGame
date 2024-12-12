"use client";

import { useEffect, useRef, useState } from "react";
import style from "./Slider.module.scss";
import ItemSlider from "./ItemSlider";

type CarouselProps = {
    slides: string[];
    time: number;
    pagination?: boolean;
};

const Slider = ({ slides, time, pagination = true }: CarouselProps) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const goToSlide = (index: number) => {
        const containerEl = containerRef.current;
        const el = rootRef.current;

        setActiveSlide(index);

        containerEl?.scrollTo({
            left: (el?.clientWidth ?? 0) * index,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        goToSlide(activeSlide);
        const timer = setInterval(() => {
            goToSlide(activeSlide);
            setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
        }, time);
        return () => clearInterval(timer);
    }, [activeSlide, slides.length, time]);

    const cn = (...args: string[]) => args.filter(Boolean).join(" ");

    return (
        <div ref={rootRef} className={style.carousel}>
            <div className="carousel__wrapper">
                <div ref={containerRef} className="carousel__container">
                    {slides.map((slide, id) => (
                        <ItemSlider slide={slide} key={id} />
                    ))}
                </div>
            </div>
            {pagination && (
                <div className="carousel__pagination">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            type="button"
                            className={cn(
                                "carousel__dot",
                                activeSlide === index ? "active" : ""
                            )}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slider;

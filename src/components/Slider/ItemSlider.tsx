import Image from "next/image";
import React from "react";

type Props = {
    slide: string;
};

const ItemSlider = ({ slide }: Props) => {
    return (
        <div className="carousel__slide">
            <Image
                className="carousel__slide-img"
                src={slide}
                alt="слайд"
                width={400}
                height={250}
                quality={100}
                priority
            />
        </div>
    );
};
export default ItemSlider;

import Slider from "@/components/Slider/Slider";
import style from "./home.module.scss";
import Image from "next/image";

export default function Home() {
    const slides: string[] = [
        "https://placehold.co/800x500/png",
        "https://placehold.co/800x500/png",
        "https://placehold.co/800x500/png",
        "https://placehold.co/800x500/png",
    ];
    return (
        <div className={style.home}>
            <Image
                src={"/homeBg.png"}
                fill
                alt="background"
                style={{ opacity: 0.7, zIndex: -1 }}
            />
            <div className="home__container">
                <div className="home__content">
                    <div>
                        <h1 className="home__title">
                            Военно-историческая игра «Путь к Победе»
                        </h1>
                        <p className="home__description">
                            В нашей игре вы сможете окунуться в события Великой
                            отечественной войны, много узнать нового об этом
                            историческом периоде и проверить полученные знания.
                        </p>
                        <p className="home__description-footer">
                            Играй, узнавай новое и пройди путь от красноармейца
                            до генерала!
                        </p>
                    </div>
                </div>
                <div className="home__slider-image">
                    <Slider slides={slides} time={5000}></Slider>
                </div>
            </div>
        </div>
    );
}

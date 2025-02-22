import Slider from "@/components/Slider/Slider";
import style from "@/styles/home.module.scss";
import Image from "next/image";
import { cookies } from "next/headers";
import { PRIVATE_URL } from "@/config/url.config";
import { getUserData } from "@/services/auth/auth-token.service";
import { redirect } from "next/navigation";

export default async function Home() {
    const slides: string[] = [
        "/home1.jpg",
        "/home2.jpg",
        "/home3.jpg",
        "/home4.jpg",
    ];
    const accessToken = (await cookies()).get("access_token");
    const user = getUserData(accessToken?.value);
    if (accessToken) redirect(PRIVATE_URL.home("", user?.role));
    return (
        <div className={style.home}>
            <Image
                src={"/homeBg.png"}
                fill
                alt="background"
                style={{ opacity: 0.7, zIndex: -1 }}
            />
            <div className={style["home__container"]}>
                <div className={style["home__content"]}>
                    <div>
                        <h1 className={style["home__title"]}>
                            Военно-историческая игра «Путь к Победе»
                        </h1>
                        <p className={style["home__description"]}>
                            В нашей игре вы сможете окунуться в события Великой
                            отечественной войны, много узнать нового об этом
                            историческом периоде и проверить полученные знания.
                        </p>
                        <p className={style["home__description-footer"]}>
                            Играй, узнавай новое и пройди путь от красноармейца
                            до генерала!
                        </p>
                    </div>
                </div>
                <div className={style["home__slider-image"]}>
                    <Slider slides={slides} time={5000}></Slider>
                </div>
            </div>
        </div>
    );
}

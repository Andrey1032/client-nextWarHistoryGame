"use client";

import style from "./Nav.module.scss";
import { PRIVATE_URL, PUBLIC_URL } from "@/config/url.config";
import Link from "next/link";
import { authService } from "@/services/auth/auth.service";
import { useState } from "react";
import Image from "next/image";
import { getUserData } from "@/services/auth/auth-token.service";

const Nav = ({
    role,
    accessToken,
}: {
    role?: string;
    accessToken: string | undefined;
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const user = getUserData(accessToken);

    if (role === "STUDENT") {
        return (
            <nav
                className={` ${style["nav-vertical"]} ${
                    !isOpen && style["nav-vertical-close"]
                }`}
            >
                <button
                    className={`${style["nav__button-open"]} ${
                        isOpen && style["close"]
                    }`}
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                    <Image
                        src={"/open-arrow.svg"}
                        width={30}
                        height={30}
                        alt="open-iсon"
                    />
                </button>
                <Link
                    className={style["nav__link"]}
                    href={PRIVATE_URL.home("", "STUDENT")}
                >
                    <Image
                        className={style["nav__logo"]}
                        src={"/logo.png"}
                        width={210}
                        height={25}
                        alt="logotip"
                        priority
                    />
                </Link>
                <div className={`${style["nav__content"]}`}>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.home("", "STUDENT")}
                        onClick={() => {
                            setIsOpen((isOpen) => !isOpen);
                        }}
                    >
                        Продолжить
                    </Link>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.teoria("")}
                    >
                        База знаний
                    </Link>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.awards("")}
                    >
                        Награды
                    </Link>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.top("")}
                    >
                        Рейтинг
                    </Link>
                </div>
                <div className={style["nav__content"]}>
                    <h4 className={style["nav__stats-title"]}>Статистика</h4>
                    <div className={style["nav__stats"]}>
                        <div className={style["nav__stats-item"]}>
                            <p>Звание</p> Рядовой
                        </div>
                        <div className={style["nav__stats-item"]}>
                            <p>Находится на этапе</p>
                            Начало ВОВ
                        </div>
                        <div className={style["nav__stats-item"]}>
                            <p>Ранений</p> 0
                        </div>
                    </div>
                </div>
                <div className={style["nav__content"]}>
                    <Link
                        className={style["nav__link"]}
                        href={PUBLIC_URL.auth("signIn")}
                    >
                        Профиль {user?.login}
                    </Link>
                    <a
                        className={style["nav__link"]}
                        href={PUBLIC_URL.auth("signIn")}
                        onClick={() => authService.logout()}
                    >
                        Выйти
                    </a>
                </div>
            </nav>
        );
    }

    if (role === "TEACHER") {
        return (
            <nav className={style["nav-vertical"]}>
                <Link
                    className="nav__link"
                    href={PRIVATE_URL.home("", "TEACHER")}
                >
                    <Image
                        className={style["nav__logo"]}
                        src={"/logo.png"}
                        width={210}
                        height={25}
                        alt="logotip"
                        priority
                    />
                </Link>
                <div className={`${style["nav__content"]}`}>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.home("", "TEACHER")}
                    >
                        Статистика
                    </Link>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.practica("")}
                    >
                        Практические задания
                    </Link>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.teoria("", "TEACHER")}
                    >
                        Теоретический материал
                    </Link>
                    <Link
                        className={style["nav__link"]}
                        href={PRIVATE_URL.modeleducation("")}
                    >
                        Модель AI обучения
                    </Link>
                </div>
                <Link
                    className="nav__link "
                    href={PUBLIC_URL.auth("signIn")}
                    onClick={() => authService.logout()}
                >
                    Выйти
                </Link>
            </nav>
        );
    }

    return (
        <nav className={style["nav"]}>
            <Link className={style["nav__link"]} href={PUBLIC_URL.home()}>
                <Image
                    className={style["nav__logo"]}
                    src={"/logo.png"}
                    width={210}
                    height={25}
                    alt="logotip"
                    priority
                />
            </Link>
            <Link
                className={style["nav__link"]}
                href={PUBLIC_URL.auth("signIn")}
            >
                Войти
            </Link>
        </nav>
    );
};

export default Nav;

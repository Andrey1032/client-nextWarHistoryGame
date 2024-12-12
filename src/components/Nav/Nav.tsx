import React from "react";
import style from "./Nav.module.scss";
import { PUBLIC_URL } from "@/config/url.config";
import Link from "next/link";
const Nav = () => {
    return (
        <header >
            <nav className={style.nav}>
                <Link className="nav__link" href={PUBLIC_URL.home()}>
                    Путь к Победе
                </Link>
                <Link className="nav__link" href={PUBLIC_URL.auth("signIn")}>
                    Войти
                </Link>
            </nav>
        </header>
    );
};

export default Nav;

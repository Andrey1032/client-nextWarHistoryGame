import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import style from "@/assets/styles/Stats.module.scss";
const inter = Inter({
    variable: "--font-family-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Путь к Победе",
    description: "Военно-историческая игра «Путь к победе»",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={`${inter.variable}`}>{children}</body>
            <div className={style["stats"]}>
                <h4 className={style["stats__title"]}>Статистика</h4>
                <div className={style["stats__container"]}>
                    <div className={style["stats__item"]}>
                        <p>Звание:</p> Рядовой
                    </div>
                    <div className={style["stats__item"]}>
                        <p>Этап прохождения:</p>
                        Начало ВОВ
                    </div>
                    <div className={style["stats__item"]}>
                        <p>Ранений:</p> 0
                    </div>
                </div>
            </div>
        </html>
    );
}

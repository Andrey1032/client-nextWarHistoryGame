import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "@/providers/providerApollo";

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
            <body className={`${inter.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

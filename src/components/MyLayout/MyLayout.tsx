"use client";

import Cookies from "js-cookie";
import style from "./MyLayout.module.scss";
import dynamic from "next/dynamic";
const DynamicNav = dynamic(() => import("@/components/Nav/Nav"), {
    ssr: false,
});
export default function MyLayout({
    children,
    role,
}: {
    children: React.ReactNode;
    role?: string;
}) {
    const accessToken = Cookies.get("access_token");

    return (
        <div className={role && style["my-layout"]}>
            <header>
                <DynamicNav role={role} accessToken={accessToken} />
            </header>
            <main>{children}</main>
        </div>
    );
}

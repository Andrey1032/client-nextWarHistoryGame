import Cookies from "js-cookie";
import style from "./MyLayout.module.scss";

import Nav from "../Nav/Nav";

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
                <Nav role={role} accessToken={accessToken} />
            </header>
            {children}
        </div>
    );
}

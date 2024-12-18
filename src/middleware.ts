import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PRIVATE_URL, PUBLIC_URL } from "./config/url.config";
import { EnumTokens, getUserData } from "./services/auth/auth-token.service";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./shared/types/user.interface";

export async function middleware(request: NextRequest) {
    const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
    const user = getUserData(accessToken);
    const isAuthPage = request.url.includes(PUBLIC_URL.auth());

    if (isAuthPage) {
        if (accessToken) {
            return NextResponse.redirect(
                new URL(PRIVATE_URL.home("", user?.role), request.url)
            );
        } else return NextResponse.next();
    }

    if (!accessToken) {
        return NextResponse.redirect(
            new URL(PUBLIC_URL.auth("signIn"), request.url)
        );
    } else {
        const { role } = <IUser>jwtDecode(accessToken);

        if (role === "STUDENT") {
            if (request.url.includes("student")) {
                return NextResponse.next();
            } else {
                return NextResponse.rewrite(new URL("/not-found", request.url));
            }
        }

        if (role === "TEACHER") {
            if (request.url.includes("teacher")) {
                return NextResponse.next();
            } else {
                return NextResponse.rewrite(new URL("/not-found", request.url));
            }
        }
    }
}

export const config = {
    matcher: ["/student/:path*", "/teacher/:path*", "/auth/:path*"],
};

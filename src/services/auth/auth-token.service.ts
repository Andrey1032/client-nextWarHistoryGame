import { IUser } from "@/shared/types/user.interface";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export enum EnumTokens {
    ACCESS_TOKEN = "access_token",
    REFRESH_TOKEN = "refresh_token",
}

export const getUserLogin = () => {
    const token = Cookies.get(EnumTokens.ACCESS_TOKEN);
    try {
        const data = <IUser>jwtDecode(String(token));
        return data?.login;
    } catch {
        return "";
    }
};

export const getAccessToken = () => {
    const access_token = Cookies.get(EnumTokens.ACCESS_TOKEN);
    return access_token || null;
};

export const getRefreshToken = () => {
    const refresh_token = Cookies.get(EnumTokens.REFRESH_TOKEN);
    return refresh_token || null;
};

export const saveTokenStorage = (
    nameToken: EnumTokens,
    value: string,
    expires: number | Date = 1
) => {
    Cookies.set(nameToken, value, {
        domain: process.env.APP_DOMAIN,
        sameSite: "strict",
        expires: expires,
    });
};
export const removeFromStorage = (namesToken: EnumTokens[]) => {
    namesToken.forEach((value) => Cookies.remove(value));
};

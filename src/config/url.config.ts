export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
    root: (url = "") => `${url ? url : ""}`,
    home: (query = "") => PUBLIC_URL.root(`/${query}`),
    auth: (url = "") => PUBLIC_URL.root(`/auth/${url}`),
};
export const PRIVATE_URL = {
    root: (url = "") => `${url ? url : ""}`,
    home: (url = "", role = "") =>
        role === "STUDENT"
            ? PRIVATE_URL.root(`/student${url}`)
            : PRIVATE_URL.root(`/teacher${url}`),
    teoria: (url = "", role = "STUDENT") => PRIVATE_URL.home(`/teoria${url}`, role),
    practica: (url = "") => PRIVATE_URL.home(`/practica${url}`, "TEACHER"),
    awards: (url = "") => PRIVATE_URL.home(`/awards${url}`, "STUDENT"),
    stats: (url = "") => PRIVATE_URL.home(`/stats${url}`, "STUDENT"),
    top: (url = "") => PRIVATE_URL.home(`/top${url}`, "STUDENT"),
};

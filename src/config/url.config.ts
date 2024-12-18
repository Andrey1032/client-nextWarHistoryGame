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
            ? PRIVATE_URL.root(`/student/${url}`)
            : PRIVATE_URL.root(`/teacher/${url}`),
    teoria: (url = "") => PRIVATE_URL.root(`/student/teoria/${url}`),
    awards: (url = "") => PRIVATE_URL.root(`/student/awards/${url}`),
    stats: (url = "") => PRIVATE_URL.root(`/student/stats/${url}`),
    top: (url = "") => PRIVATE_URL.root(`/student/top/${url}`),
};

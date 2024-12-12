export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
    root: (url = "") => `${url ? url : ""}`,
    home: (query = "") => PUBLIC_URL.root(`/${query}`),
    auth: (url = "") => PUBLIC_URL.root(`/auth/${url}`),
};
export const PRIVATE_URL = {
    root: (url = "") => `${url ? url : ""}`,
    homeTeacher: (url = "") => PUBLIC_URL.root(`/teacher/${url}`),
    homeStudent: (url = "") => PUBLIC_URL.root(`/student/${url}`),
};

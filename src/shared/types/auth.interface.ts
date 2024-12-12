export interface IAuthForm {
    email?: string;
    login: string;
    password: string;
    repeat_password?: string;
    apiError?: string;
}

export interface IAuthResponse {
    access_token: string;
    refresh_token: string;
}

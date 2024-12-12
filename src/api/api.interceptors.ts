import { getContentType } from "./api.helper";
import { SERVER_URL } from "@/config/api.config";
import {
    EnumTokens,
    getAccessToken,
    removeFromStorage,
} from "@/services/auth/auth-token.service";
import { authService } from "@/services/auth/auth.service";
import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: getContentType(),
    withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
    const accessToken = getAccessToken();

    if (config?.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
});

axiosWithAuth.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;

        if (error?.response?.status === 401 || !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                await authService.getNewTokens();
                return axiosWithAuth.request(originalRequest);
            } catch {
                removeFromStorage([
                    EnumTokens.ACCESS_TOKEN,
                    EnumTokens.REFRESH_TOKEN,
                ]);
            }
        }

        throw error;
    }
);
export { axiosClassic, axiosWithAuth };

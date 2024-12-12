import { IBasket } from "./basket.interface";

export interface IUser {
    id: number;
    login: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    Basket: IBasket;
}
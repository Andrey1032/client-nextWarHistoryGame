export interface IReward {
    TypeReward: ITypeRewardModel;
    created_at: Date;
    description: string;
    id: number;
    name: string;
    typeRewardId: number;
    updated_at: Date;
    url: string;
}
export interface ITypeRewardModel {
    created_at: Date;
    id: number;
    name: string;
    updated_at: Date;
}

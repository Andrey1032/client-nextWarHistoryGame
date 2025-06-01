import { ITopicModel, ITypeFileModel } from "./topic.interface";

export interface ITypeMiniGameModel {
    id: number;
    name: string;
}

export interface ITypeTaskModel {
    id: number;
    name: string;
}

export interface IFileAnswerModel {
    id: number;
    url: string;
    answerId?: number;
}

export interface IAnswerModel {
    id: number;
    text: string;
    correct?: string | null;
    questionId?: number;
    FileAnswer: IFileAnswerModel | null;
}

export interface IPracticMaterialModel {
    id: number;
    url: string;
    questionId?: number;
    typeFileId?: number;
    TypeFile?: ITypeFileModel;
}

export interface IResponceTemplateModel {
    id: number;
    text: string;
    questionId?: number;
}

export interface IQuestionModel {
    id: number;
    text: string;
    topicId?: number;
    Topic?: ITopicModel;
    Answer: IAnswerModel[];
    ResponceTemplate?: IResponceTemplateModel | null;
    PracticMaterial?: IPracticMaterialModel[];
    typeTaskId?: number;
    TypeTask?: ITypeTaskModel;
    typeMiniGameId?: number;
    TypeMiniGame: ITypeMiniGameModel;
    scaleImportantId?: number;
}

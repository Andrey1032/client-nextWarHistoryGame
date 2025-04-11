export interface ITopic {
    Subtopic: ISubtopicModel[];
    _count: ICount;
    created_at: Date;
    disciplinaId: number;
    id: number;
    name: string;
    updated_at: Date;
}
export interface ICount {
    Question: number;
}

export interface ISubtopicModel {
    TheoryMaterial: ITheoryMaterialModel[];
    created_at: Date;
    id: number;
    name: string;
    topicId: number;
    updated_at: Date;
}

export interface ITheoryMaterialModel {
    TypeFile: ITypeFileModel;
    created_at: Date;
    description: string;
    id: number;
    subtopicId: number;
    typeFileId: number;
    updated_at: Date;
    url: string;
}

export interface ITypeFileModel {
    created_at: Date;
    id: number;
    name: string;
    updated_at: Date;
}

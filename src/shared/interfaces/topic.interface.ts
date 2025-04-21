export interface ITopicModel {
    Subtopic: ISubtopicModel[];
    _count: ICount;
    disciplinaId: number;
    id: number;
    name: string;
}
export interface ICount {
    Question: number;
}

export interface ISubtopicModel {
    TheoryMaterial: ITheoryMaterialModel[];
    id: number;
    name: string;
    topicId: number;
}

export interface ITheoryMaterialModel {
    TypeFile: ITypeFileModel;
    description: string;
    id: number;
    subtopicId: number;
    typeFileId: number;
    url: string;
}

export interface ITypeFileModel {
    id: number;
    name: string;
}

import { ISubtopicModel } from "@/shared/interfaces/topic.interface";

// Тестовый набор данных для подтем с теоретическими материалами
export const testSubtopicsData = (topic_id: number): ISubtopicModel[] => {
    return [
        {
            id: 1,
            name: "Начало Великой Отечественной войны",
            topicId: topic_id,
            TheoryMaterial: [
                {
                    id: 101,
                    description: "Вводная лекция о начале ВОВ",
                    subtopicId: 1,
                    typeFileId: 1,
                    url: "/video/StartVOV1941.mp4",
                    TypeFile: {
                        id: 1,
                        name: "video",
                    },
                },
                {
                    id: 102,
                    description: "Аудиозапись с рассказом о первых днях войны",
                    subtopicId: 1,
                    typeFileId: 2,
                    url: "/audio/tema1.mp3",
                    TypeFile: {
                        id: 2,
                        name: "audio",
                    },
                },
                {
                    id: 103,
                    description: "Электронная книга о начале войны",
                    subtopicId: 1,
                    typeFileId: 3,
                    url: "/StartVOV.epub",
                    TypeFile: {
                        id: 3,
                        name: "book",
                    },
                },
                {
                    id: 105,
                    description: "Вводная лекция о начале ВОВ",
                    subtopicId: 1,
                    typeFileId: 1,
                    url: "/video/StartVOV1941.mp4",
                    TypeFile: {
                        id: 1,
                        name: "video",
                    },
                },
                {
                    id: 104,
                    description: "Аудиозапись с рассказом о первых днях войны",
                    subtopicId: 1,
                    typeFileId: 2,
                    url: "/audio/tema1.mp3",
                    TypeFile: {
                        id: 2,
                        name: "audio",
                    },
                },
                {
                    id: 106,
                    description: "Электронная книга о начале войны",
                    subtopicId: 1,
                    typeFileId: 3,
                    url: "/StartVOV.epub",
                    TypeFile: {
                        id: 3,
                        name: "book",
                    },
                },
            ],
        },
        {
            id: 2,
            name: "Брестская крепость - первый рубеж обороны",
            topicId: topic_id,
            TheoryMaterial: [
                {
                    id: 201,
                    description:
                        "Видеолекция о героической обороне Брестской крепости",
                    subtopicId: 2,
                    typeFileId: 1,
                    url: "/video/tema1.mp4",
                    TypeFile: {
                        id: 1,
                        name: "video",
                    },
                },
                {
                    id: 202,
                    description:
                        "Дополнительные материалы о защитниках крепости",
                    subtopicId: 2,
                    typeFileId: 3,
                    url: "/Brestskai.epub",
                    TypeFile: {
                        id: 3,
                        name: "book",
                    },
                },
            ],
        },
        {
            id: 3,
            name: "Битва за Москву",
            topicId: topic_id,
            TheoryMaterial: [
                {
                    id: 301,
                    description: "Основные этапы битвы за Москву",
                    subtopicId: 3,
                    typeFileId: 1,
                    url: "/video/tema1-2.mp4",
                    TypeFile: {
                        id: 1,
                        name: "video",
                    },
                },
            ],
        },
        {
            id: 4,
            name: "Блокада Ленинграда",
            topicId: topic_id,
            TheoryMaterial: [
                {
                    id: 401,
                    description: "Хронология блокады Ленинграда",
                    subtopicId: 4,
                    typeFileId: 1,
                    url: "/video/tema1.mp4",
                    TypeFile: {
                        id: 1,
                        name: "video",
                    },
                },
                {
                    id: 402,
                    description: "Воспоминания жителей блокадного Ленинграда",
                    subtopicId: 4,
                    typeFileId: 2,
                    url: "/audio/tema1.mp3",
                    TypeFile: {
                        id: 2,
                        name: "audio",
                    },
                },
            ],
        },
        {
            id: 5,
            name: "Сталинградская битва",
            topicId: topic_id,
            TheoryMaterial: [],
        },
    ];
};

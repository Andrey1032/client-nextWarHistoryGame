import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const getQuestionAllQuery = gql`
    query Query($topicId: Int) {
        getQuestionAll(topicId: $topicId) {
            Questions {
                Topic {
                    name
                }
                text
                Answer {
                    id
                    text
                    correct
                    questionId
                    FileAnswer {
                        id
                        url
                        answerId
                    }
                }
                PracticMaterial {
                    TypeFile {
                        id
                        name
                    }
                }
                ResponceTemplate {
                    id
                    text
                    questionId
                }
                TypeMiniGame {
                    id
                    name
                }
                TypeTask {
                    id
                    name
                }
                id
                topicId
                typeMiniGameId
                typeTaskId
            }
            totalCount
        }
    }
`;
const getQuestionAOneIdQuery = gql`
    query Query($getQuestionAOneId: Int!) {
        getQuestionAOne(id: $getQuestionAOneId) {
            text
            Answer {
                id
                text
                correct
                questionId
                FileAnswer {
                    id
                    url
                    answerId
                }
            }
            PracticMaterial {
                TypeFile {
                    id
                    name
                }
            }
            ResponceTemplate {
                id
                text
                questionId
            }
            TypeMiniGame {
                id
                name
            }
            TypeTask {
                id
                name
            }
            id
            topicId
            typeMiniGameId
            typeTaskId
        }
    }
`;

const updateQuestionQuery = gql`
    mutation Mutation(
        $updateQuestionId: Int!
        $updateQuestionData: UpdateQuestionInput!
    ) {
        updateQuestion(
            id: $updateQuestionId
            updateQuestionData: $updateQuestionData
        ) {
            count
        }
    }
`;

const getTypeTaskQuery = gql`
    query Query {
        getTypeTaskAll {
            name
            id
        }
    }
`;

class TeacherService {
    getQuestionAll = (topicId: number) => {
        const { loading, error, data } = useQuery(getQuestionAllQuery, {
            variables: {
                topicId: topicId,
            },
        });

        return { loading, error, data };
    };
    getTypeTask = () => {
        const { loading, error, data } = useQuery(getTypeTaskQuery);

        return { loading, error, data };
    };
    getQuestionAOneId = (getQuestionAOneId: number) => {
        const { loading, error, data } = useQuery(getQuestionAOneIdQuery, {
            variables: {
                getQuestionAOneId: getQuestionAOneId,
            },
        });

        return { loading, error, data };
    };
    updateQuestion = () => {
        const [editQuestion, { data, loading, error }] = useMutation(
            updateQuestionQuery,
            {
                refetchQueries: [getQuestionAllQuery],
            }
        );

        return { editQuestion, data, loading, error };
    };
}

export const teacherService = new TeacherService();

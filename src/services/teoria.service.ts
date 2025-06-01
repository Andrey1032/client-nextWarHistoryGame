import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

//TOPIC QUERY
const getTopiciesQuery = gql`
    query Query {
        getTopicAll {
            id
            name
            Subtopic {
                id
                name
                TheoryMaterial {
                    url
                    description
                    TypeFile {
                        name
                    }
                }
            }
            _count {
                Question
            }
        }
    }
`;

const getOneTopicQuery = gql`
    query Query($id: Float!) {
        getTopicOne(id: $id) {
            id
            name
            Subtopic {
                id
                name
                TheoryMaterial {
                    description
                    id
                    url
                    TypeFile {
                        id
                        name
                    }
                }
            }
        }
    }
`;

const createTopicQuery = gql`
    mutation Mutation($name: String!, $disciplinaId: Int) {
        createTopic(name: $name, disciplinaId: $disciplinaId) {
            id
            name
        }
    }
`;
const updateTopicQuery = gql`
    mutation Mutation($updateTopicData: UpdateTopicInput!) {
        updateTopic(updateTopicData: $updateTopicData) {
            name
        }
    }
`;
const deleteTopicQuery = gql`
    mutation Mutation($deleteTopicId: Int!) {
        deleteTopic(id: $deleteTopicId) {
            id
            name
        }
    }
`;

//SUBTOPIC QUERY
const getOneSubtopicQuery = gql`
    query GetSubtopicOne($id: Int!) {
        getSubtopicOne(id: $id) {
            TheoryMaterial {
                description
                id
                url
                TypeFile {
                    id
                    name
                }
                usage
            }
            id
            name
        }
    }
`;
const createSubtopicQuery = gql`
    mutation CreateSubtopic($name: String!, $id: Int) {
        createSubtopic(name: $name, topicId: $id) {
            id
        }
    }
`;
const updateSubtopicQuery = gql`
    mutation Mutation($updateSubtopicData: UpdateSubtopicInput!) {
        updateSubtopic(updateSubtopicData: $updateSubtopicData) {
            count
        }
    }
`;
const deleteSubtopicQuery = gql`
    mutation DeleteSubtopic($id: Int!) {
        deleteSubtopic(id: $id) {
            id
        }
    }
`;

class TeoriaService {
    //TOPIC
    getTopicies = () => {
        const { loading, error, data } = useQuery(getTopiciesQuery);

        return { loading, error, data };
    };
    getOneTopic = (topicId: number) => {
        const { loading, error, data } = useQuery(getOneTopicQuery, {
            variables: {
                id: topicId,
            },
        });

        return { loading, error, data };
    };

    createTopic = () => {
        const [addTopic, { data, loading, error }] = useMutation(
            createTopicQuery,
            {
                refetchQueries: [getTopiciesQuery],
            }
        );

        return { addTopic, data, loading, error };
    };
    updateTopic = (handleCompleted: () => void) => {
        const [editTopic, { data, loading, error }] = useMutation(
            updateTopicQuery,
            {
                refetchQueries: [getTopiciesQuery],
                onCompleted: () => handleCompleted,
            }
        );

        return { editTopic, data, loading, error };
    };
    deleteTopic = () => {
        const [removeTopic, { data, loading, error }] = useMutation(
            deleteTopicQuery,
            {
                refetchQueries: [getTopiciesQuery],
            }
        );

        return { removeTopic, data, loading, error };
    };

    //SUBTOPIC
    getOneSubtopic = (subtopicId: number) => {
        const { loading, error, data } = useQuery(getOneSubtopicQuery, {
            variables: {
                id: subtopicId,
            },
        });

        return { loading, error, data };
    };
    createSubtopic = (handleCompleted: () => void) => {
        const [addSubtopic, { data, loading, error }] = useMutation(
            createSubtopicQuery,
            {
                refetchQueries: [getOneTopicQuery],
                onCompleted: () => handleCompleted,
            }
        );

        return { addSubtopic, data, loading, error };
    };
    updateSubtopic = (handleCompleted: () => void) => {
        const [editSubtopic, { data, loading, error }] = useMutation(
            updateSubtopicQuery,
            {
                refetchQueries: [getOneTopicQuery],
                onCompleted: () => handleCompleted,
            }
        );

        return { editSubtopic, data, loading, error };
    };
    deleteSubtopic = () => {
        const [removeSubtopic, { data, loading, error }] = useMutation(
            deleteSubtopicQuery,
            {
                refetchQueries: [getOneTopicQuery],
            }
        );

        return { removeSubtopic, data, loading, error };
    };
}

export const teoriaService = new TeoriaService();

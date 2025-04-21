import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

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

class TopicService {
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
}

export const topicService = new TopicService();

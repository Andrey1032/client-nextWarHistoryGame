import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const getAwardsQuery = gql`
    query Query {
        getRewardAll {
            id
            name
            description
            url
            TypeReward {
                name
                id
            }
            typeRewardId
        }
    }
`;

const getOneAwardQuery = gql`
    query Query($id: Int!) {
        getRewardAOne(id: $id) {
            TypeReward {
                id
                name
                created_at
                updated_at
            }
            created_at
            description
            id
            name
            typeRewardId
            updated_at
            url
        }
    }
`;

const getAwardsByTypeQuery = gql`
    query Query($id: Int!) {
        getRewardByType(id: $id) {
            TypeReward {
                name
            }
            description
            id
            name
            typeRewardId
            updated_at
            url
            created_at
        }
    }
`;

class AwardService {
    getAwards = () => {
        const { loading, error, data } = useQuery(getAwardsQuery);

        return { loading, error, data };
    };
    getOneAward = (awardId: number) => {
        const { loading, error, data } = useQuery(getOneAwardQuery, {
            variables: {
                id: awardId,
            },
        });

        return { loading, error, data };
    };
    getAwardsByType = (typeId: number) => {
        const { loading, error, data } = useQuery(getAwardsByTypeQuery, {
            variables: {
                id: typeId,
            },
        });

        return { loading, error, data };
    };
}

export const awardService = new AwardService();

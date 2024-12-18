import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { PropsWithChildren } from "react";
import { setContext } from "@apollo/client/link/context";
import { SERVER_URL } from "@/config/api.config";
import Cookies from "js-cookie";

const httpLink = createHttpLink({
    uri: `${SERVER_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
    const token = Cookies.get("access_token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
        },
    },
});

export function Providers({ children }: PropsWithChildren) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

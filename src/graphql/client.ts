import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { cache } from './cache';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: 'https://eu1.prisma.sh/nevena-djaja/mocks/dev',
});

const createApolloClient = () => {
  return new ApolloClient({
    cache,
    credentials: 'same-origin',
    link: from([errorLink, httpLink]),
    ssrMode: typeof window === 'undefined',
  });
};

export const initializeApollo = (initialState: Record<string, any> = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
};

export const useApollo = (initialState: Record<string, any>) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};

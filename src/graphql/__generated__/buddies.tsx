import * as Types from './types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
export type GetBuddiesQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type GetBuddiesQuery = {
  __typename: 'Query';
  buddies: Array<{
    __typename: 'Buddy';
    id: string;
    name: string;
    image: string;
  } | null>;
};

export type SearchBuddiesQueryVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
}>;

export type SearchBuddiesQuery = {
  __typename: 'Query';
  buddies: Array<{
    __typename: 'Buddy';
    id: string;
    name: string;
    image: string;
  } | null>;
};

export type GetBuddyQueryVariables = Types.Exact<{
  where: Types.BuddyWhereUniqueInput;
}>;

export type GetBuddyQuery = {
  __typename: 'Query';
  buddy?: {
    __typename: 'Buddy';
    id: string;
    name: string;
    image: string;
  } | null;
};

export const GetBuddiesDocument = gql`
  query GetBuddies($limit: Int) {
    buddies(first: $limit) {
      id
      name
      image
    }
  }
`;
export type GetBuddiesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetBuddiesQuery,
    GetBuddiesQueryVariables
  >,
  'query'
>;

export const GetBuddiesComponent = (props: GetBuddiesComponentProps) => (
  <ApolloReactComponents.Query<GetBuddiesQuery, GetBuddiesQueryVariables>
    query={GetBuddiesDocument}
    {...props}
  />
);

/**
 * __useGetBuddiesQuery__
 *
 * To run a query within a React component, call `useGetBuddiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBuddiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBuddiesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetBuddiesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetBuddiesQuery,
    GetBuddiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetBuddiesQuery, GetBuddiesQueryVariables>(
    GetBuddiesDocument,
    options
  );
}
export function useGetBuddiesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetBuddiesQuery,
    GetBuddiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    GetBuddiesQuery,
    GetBuddiesQueryVariables
  >(GetBuddiesDocument, options);
}
export type GetBuddiesQueryHookResult = ReturnType<typeof useGetBuddiesQuery>;
export type GetBuddiesLazyQueryHookResult = ReturnType<
  typeof useGetBuddiesLazyQuery
>;
export type GetBuddiesQueryResult = ApolloReactCommon.QueryResult<
  GetBuddiesQuery,
  GetBuddiesQueryVariables
>;
export const SearchBuddiesDocument = gql`
  query SearchBuddies($name: String, $limit: Int) {
    buddies(where: { name_contains: $name }, first: $limit) {
      id
      name
      image
    }
  }
`;
export type SearchBuddiesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    SearchBuddiesQuery,
    SearchBuddiesQueryVariables
  >,
  'query'
>;

export const SearchBuddiesComponent = (props: SearchBuddiesComponentProps) => (
  <ApolloReactComponents.Query<SearchBuddiesQuery, SearchBuddiesQueryVariables>
    query={SearchBuddiesDocument}
    {...props}
  />
);

/**
 * __useSearchBuddiesQuery__
 *
 * To run a query within a React component, call `useSearchBuddiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBuddiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBuddiesQuery({
 *   variables: {
 *      name: // value for 'name'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchBuddiesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SearchBuddiesQuery,
    SearchBuddiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    SearchBuddiesQuery,
    SearchBuddiesQueryVariables
  >(SearchBuddiesDocument, options);
}
export function useSearchBuddiesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SearchBuddiesQuery,
    SearchBuddiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    SearchBuddiesQuery,
    SearchBuddiesQueryVariables
  >(SearchBuddiesDocument, options);
}
export type SearchBuddiesQueryHookResult = ReturnType<
  typeof useSearchBuddiesQuery
>;
export type SearchBuddiesLazyQueryHookResult = ReturnType<
  typeof useSearchBuddiesLazyQuery
>;
export type SearchBuddiesQueryResult = ApolloReactCommon.QueryResult<
  SearchBuddiesQuery,
  SearchBuddiesQueryVariables
>;
export const GetBuddyDocument = gql`
  query GetBuddy($where: BuddyWhereUniqueInput!) {
    buddy(where: $where) {
      id
      name
      image
    }
  }
`;
export type GetBuddyComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetBuddyQuery,
    GetBuddyQueryVariables
  >,
  'query'
> &
  ({ variables: GetBuddyQueryVariables; skip?: boolean } | { skip: boolean });

export const GetBuddyComponent = (props: GetBuddyComponentProps) => (
  <ApolloReactComponents.Query<GetBuddyQuery, GetBuddyQueryVariables>
    query={GetBuddyDocument}
    {...props}
  />
);

/**
 * __useGetBuddyQuery__
 *
 * To run a query within a React component, call `useGetBuddyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBuddyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBuddyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetBuddyQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    GetBuddyQuery,
    GetBuddyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetBuddyQuery, GetBuddyQueryVariables>(
    GetBuddyDocument,
    options
  );
}
export function useGetBuddyLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetBuddyQuery,
    GetBuddyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetBuddyQuery, GetBuddyQueryVariables>(
    GetBuddyDocument,
    options
  );
}
export type GetBuddyQueryHookResult = ReturnType<typeof useGetBuddyQuery>;
export type GetBuddyLazyQueryHookResult = ReturnType<
  typeof useGetBuddyLazyQuery
>;
export type GetBuddyQueryResult = ApolloReactCommon.QueryResult<
  GetBuddyQuery,
  GetBuddyQueryVariables
>;

import type { GetServerSideProps, NextPage } from 'next';
import { useCallback, useState } from 'react';

import { BuddiesList } from '../src/components/Buddies/BuddiesList';
import { Search } from '../src/containers';
import {
  GetBuddiesDocument,
  initializeApollo,
  useGetBuddiesQuery,
} from '../src/graphql';

const FRESH_BUDDIES_LIMIT = 10;

const Home: NextPage = () => {
  const { data } = useGetBuddiesQuery({
    variables: { limit: FRESH_BUDDIES_LIMIT },
  });
  const [isSearching, setIsSearching] = useState(false);
  const onSearchResults = useCallback((is: boolean) => setIsSearching(is), []);

  return (
    <div>
      <Search onSearchResults={onSearchResults} />
      <BuddiesList buddies={data.buddies} fade={isSearching} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query({
      query: GetBuddiesDocument,
      variables: { limit: FRESH_BUDDIES_LIMIT },
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  } catch (e) {
    console.error(e);

    return {
      props: {},
    };
  }
};

export default Home;

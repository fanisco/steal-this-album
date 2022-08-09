import type { GetServerSideProps, NextPage } from 'next';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

import { IndexBuddies } from '../src/components/Buddies/IndexBuddies';
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
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.2, delay: 0 }}>
      <Search onSearchResults={onSearchResults} />
      <IndexBuddies buddies={data.buddies} fade={isSearching} />
    </motion.div>
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

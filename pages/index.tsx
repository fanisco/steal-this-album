import type { GetServerSideProps, NextPage } from 'next';

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

  return (
    <div>
      <Search />
      <BuddiesList buddies={data?.buddies} />
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

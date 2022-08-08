import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { BuddyDetails } from '../../src/components/Buddies/BuddyDetails';
import {
  GetBuddyDocument,
  initializeApollo,
  useGetBuddyQuery,
} from '../../src/graphql';

const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') {
    return null;
  }

  const { data } = useGetBuddyQuery({ variables: { where: { id } } });

  if (!data || !data.buddy) {
    return null;
  }

  return <BuddyDetails {...data.buddy} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const { id } = context.query;

  try {
    await apolloClient.query({
      query: GetBuddyDocument,
      variables: { where: { id } },
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

export default Details;

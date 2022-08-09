import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';

import { Layout } from '../src/components/Layout/Layout';
import { useApollo } from '../src/graphql';
import '../styles/globals.scss';

function App({ Component, pageProps, router }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <AnimatePresence>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ApolloProvider>
  );
}

export default App;

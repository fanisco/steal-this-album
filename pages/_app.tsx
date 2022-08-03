import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { Layout } from '../src/components/Layout/Layout';
import { useApollo } from '../src/graphql';
import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;

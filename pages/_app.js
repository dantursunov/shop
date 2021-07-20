import "../src/styles/style.scss";
import "../src/styles/index.scss";
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/client';
import { AppProvider } from "../src/components/context/AppContext";

import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppProvider>
  );
}

export default MyApp


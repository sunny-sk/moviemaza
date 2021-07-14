/* eslint-disable react/prop-types */
import '@/styles/globals.css';
import '@/styles/customize.css';

import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';

import { Layout } from '@/Layout';
import { useStore } from '@/store';
function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Movieemaza | movie info that you want</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

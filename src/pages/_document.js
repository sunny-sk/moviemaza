import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="en">
          <Head>
            <meta charSet="UTF-8" />
            <meta name="theme-color" content="#cc0000" />
            <meta
              name="description"
              content="Movieemaza is a platform where you can get all details of any movies, it provides consistent and reliable data"
            />
            <meta
              name="keywords"
              content="Movie, movieemaza, latest movies, movie listings"
            />
            <meta name="author" content="Sunny" />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"></link>
          </Head>
          <body>
            <Main />
            <NextScript />
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;

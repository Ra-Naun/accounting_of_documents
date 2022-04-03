import React from 'react';
import Head from 'next/head';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

function Default({ children, title }) {
  return (
    <>
      <Header />
      {title && <Head><title>{title}</title></Head>}
      <main>
        {children}
        </main>
    </>
  );
}

export default Default;

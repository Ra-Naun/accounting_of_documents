import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import Head from 'next/head';

function Default({ children, title }) {
  return (
    <>
        {title && <Head><title>{title}</title></Head>}
        <main>{children}</main>
    </>
  );
}

export default Default;

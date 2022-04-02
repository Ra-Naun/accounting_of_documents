import React from 'react';
import Head from 'next/head';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <>
      <Head>
        <title>ReactJS with react-bootstrap</title>
      </Head>
      <header className="header">
        <Logo/>
      </header>
    </>

  );
}

export default Header;

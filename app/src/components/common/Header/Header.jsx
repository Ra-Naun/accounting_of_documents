import React from 'react';
import Head from 'next/head';

function Header(props) {
  return (
    <>
      <Head>
        <title>ReactJS with react-bootstrap</title>
      </Head>
      <div className="header">
      {/* сюда контент для хедера */}
      </div>
    </>

  );
}

export default Header;

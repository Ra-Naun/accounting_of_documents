import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

function Default({ children }) {
  return (
    <>
      <Header/>
      <main className="default_layout">{children}</main>
      <Footer/>
    </>
  );
}

export default Default;

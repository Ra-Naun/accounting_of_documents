import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

function Default({ children }) {
  return (
    <>
        <main>{children}</main>
    </>
  );
}

export default Default;

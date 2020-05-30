import React from 'react';
import ModalComp from './ModalComp';
import './Header.css';

const Header = (props) => {
  return (
    <header className={props.displayResults ? 'Header-results' : 'Header-main'}>
      <h1>Super Battle!</h1>
      {
        props.displayResults 
          ? null
          : <ModalComp />
      }
    </header>
  )
}

export default Header;
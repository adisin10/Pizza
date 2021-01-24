  
import React from 'react';
import { Nav, NavLink,
    Bars, 
    NavIcon} from './NavbarElements.js';

const Navbar =  ({ toggle} ) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
       <NavIcon onClick = {toggle}>
          <p>Menu</p>
          <Bars />
          </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;


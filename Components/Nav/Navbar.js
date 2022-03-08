import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { SiDeepnote } from "react-icons/si";

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  box-shadow: 0px 2px 5px #E8E8E8;
  font-family: Nunito;
  font-weight: 400;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  right: 0;
  background: whitesmoke;
  z-index: 4;
`
const Dvent = styled.div`
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 20px;
    padding-left: 30px;
    .logo{
      padding-right: 5px;
      font-size: 25px;
    }
`

const Navbar = () => {
  return (
    <Nav>
      <Dvent>
          <SiDeepnote className='logo'/>
          Dvent
      </Dvent>
      <Burger />
    </Nav>
  )
}

export default Navbar
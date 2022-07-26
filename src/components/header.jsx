import React from 'react'
import logo from '../assets/shared/logo.svg'
import hbgmenu from '../assets/shared/icon-hamburger.svg'
import { HeaderStyled } from '../styled.components/header.styled'
const Header = (props) => {
  

  return (
    <HeaderStyled>
      <img src={logo} alt="logo" className='logo'/>
      <img src={hbgmenu} alt="" onClick={props.handleMenu} />
      
    </HeaderStyled>
  )
}

export default Header
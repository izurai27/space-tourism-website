import React from 'react'
import close from '../assets/shared/icon-close.svg'
import  MobileMenuStyled  from '../styled.components/mobilemenu.styled'
import { Link } from "react-router-dom";



const MobileMenu = (props) => {
  
  return (
    <MobileMenuStyled>
       <img src={close} alt="close icon" onClick = {props.handleMenu} />
      
      
      
      
      <ul>
        <li><span className="number">00</span><Link to="/" className='link'>HOME</Link></li>
        <li><span className="number">01</span><Link  to="/destination"  className='link'>DESTINATION</Link></li>
        <li><span className="number">02</span><Link  to="/crew" className='link'>CREW</Link></li>
        <li><span className="number">03</span><Link  to="/technology" className='link'>TECHNOLOGY</Link></li>
      </ul>
    </MobileMenuStyled>
  )
}

export default MobileMenu
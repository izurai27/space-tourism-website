import React from 'react'
import styled from 'styled-components'


const DestinationNavStyled = styled.nav`
  color:white;
  display:flex;
  column-gap: calc(27/16*1rem);
  text-transform: uppercase;
  /* margin-bottom: 20px; */
  /* margin-top: 26px; */
  font-family: 'Barlow Condensed';
  font-size: calc(14/16*1rem);
  line-height: 17px;
  /* identical to box height */

  letter-spacing: 2.3625px;

  
  .active{
    position:relative;
    display:flex;
    justify-content: center;
  }

  .active::after{
    content:'';
    width:100%;
    position:absolute;
    height: 3px;
    background-color:white;
    position:absolute;
    bottom:-8px;
  }

@media only screen and (min-width:768px){
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;

}

`

const DestinationNav = (props) => {
  const handleClick = (e) => {
    const activeEl = document.querySelector('.active')
    
    const select = e.target

    activeEl.classList.toggle('active')
    select.classList.toggle('active')
    
    props.handleView(e)
  }

  return (
    
      <DestinationNavStyled> 
        <span className='active' onClick={handleClick}>Moon</span>
        <span className='' onClick={handleClick}>Mars</span>
        <span className='' onClick={handleClick}>Europa</span>
        <span className='' onClick={handleClick}>Titan</span>

      </DestinationNavStyled>
    
  )
}

export default DestinationNav
import React from 'react'
import styled from 'styled-components'


const DestinationNavStyled = styled.ul`
  color:blue;

  .active{
    color:red;
    position:relative;
  }

  .active::after{
    content:'';
    width:100%;
    position:absolute;
  }
`

const DestinationNav = (props) => {
  const handleClick = (e) => {
    const activeEl = document.querySelector('.active')
    console.log(activeEl)
    const select = e.target

    activeEl.classList.toggle('active')
    select.classList.toggle('active')
    
    props.handleView(e)
  }

  return (
    
      <DestinationNavStyled> 
        <li className='active' onClick={handleClick}>Moon</li>
        <li className='' onClick={handleClick}>Mars</li>
        <li className='' onClick={handleClick}>Europa</li>
        <li className='' onClick={handleClick}>Titan</li>

      </DestinationNavStyled>
    
  )
}

export default DestinationNav
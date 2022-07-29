import React from 'react'
import styled from 'styled-components'

const TechNavStyled = styled.nav`
 
  display:flex;
  justify-content: space-between;
  column-gap: 1rem;
  width:fit-content;

  span{
    width:50px;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    color:black;
    display:grid;
    place-items: center;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 1px;

  }

  @media only screen and (min-width:768px){
    span{
      width:60px;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 1.5px;
    }
  }

  @media only screen and (min-width:1440px){
    display:grid;
    align-content: center;
    row-gap:2rem;
    

    span{
      width:80px;
      font-size: 32px;
      line-height: 37px;
      letter-spacing: 2px;
    }

    
  }
`

const TechNav = (props) => {
 
  const handleClick = (e) => {
    const activeEl = document.querySelector('.active')
    
    const select = e.target

    activeEl.classList.toggle('active')
    select.classList.toggle('active')

    props.handleClick(e)
  }

  return (
    <TechNavStyled>
      <span className="active" data-index={0} onClick={handleClick}>1</span>
      <span data-index={1}  onClick={handleClick}>2</span>
      <span data-index={2}  onClick={handleClick}>3</span>
     

    </TechNavStyled>
    
  )
}

export default TechNav
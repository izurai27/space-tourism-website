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
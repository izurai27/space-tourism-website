import React from 'react'
import styled from 'styled-components'

const CrewNavStyled = styled.nav`
 
  display:flex;
  justify-content: space-between;
  column-gap: 1rem;
  width:fit-content;

  span{
    width:10px;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;

  }
`

const CrewNav = (props) => {
 
  const handleClick = (e) => {
    const activeEl = document.querySelector('.active')
    
    const select = e.target

    activeEl.classList.toggle('active')
    select.classList.toggle('active')

    props.handleClick(e)
  }

  return (
    <CrewNavStyled>
      <span className="active" data-index={0} onClick={handleClick}></span>
      <span data-index={1}  onClick={handleClick}></span>
      <span data-index={2}  onClick={handleClick}></span>
      <span data-index={3}  onClick={handleClick}></span>

    </CrewNavStyled>
    
  )
}

export default CrewNav
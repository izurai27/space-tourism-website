import React, {useState} from 'react'
import  TechStyled  from '../styled.components/techs.styled'
// import data from '../assets/data.json'
import TechNav from './techNav'

const Tech = (props) => {

  const [stateIndex,setStateIndex] = useState(0)

  const handleClick = (e) => {
    
    setStateIndex(parseInt(e.target.dataset.index))
    
  }

  return (
    <TechStyled>
      <div className='h5heading'><span className='numberDark'>03</span><h5>SPACE LAUNCH 101</h5></div>
      
      {props.data.filter((el,index) => index === stateIndex).map((element,index) => {
        return(
          <div className="tech">
            <picture>
              <source media="(min-width: 1440px)" srcSet={element.images.portrait}/>
              <img src={element.images.landscape} alt={element.name}></img>
            </picture>
            <TechNav handleClick = {handleClick}/>
            <p className='terminology'>THE TERMINOLOGY…</p>
            <h3>{element.name}</h3>
            <p className='description'>{element.description}</p>

          </div>
        )
        
      })}
    </TechStyled>
  )
}

export default Tech
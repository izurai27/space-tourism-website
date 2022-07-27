import React, {useState} from 'react'
import { TechStyled } from '../styled.components/techs.styled'
// import data from '../assets/data.json'
import TechNav from './techNav'

const Tech = (props) => {

  const [stateIndex,setStateIndex] = useState(0)

  const handleClick = (e) => {
    
    setStateIndex(parseInt(e.target.dataset.index))
    console.log(typeof(e.target.dataset.index))
  }

  return (
    <TechStyled>
      <h5><span>03</span>SPACE LAUNCH 101</h5>
      {props.data.filter((el,index) => index === stateIndex).map((element,index) => {
        return(
          <div className="tech">
            <picture>
              <source media="(min-width: 1440px)" srcset={element.images.portrait}/>
              <img src={element.images.landscape} alt={element.name}></img>
            </picture>
            <TechNav handleClick = {handleClick}/>
            <p>THE TERMINOLOGY…</p>
            <h3>{element.name}</h3>
            <p>{element.description}</p>

          </div>
        )
        
      })}
    </TechStyled>
  )
}

export default Tech
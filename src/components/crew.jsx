import React, {useState} from 'react'
import { CrewStyled } from '../styled.components/crew.styled'
import CrewNav from './crewNav'

const Crew = (props) => {

  const [stateIndex,setStateIndex] = useState(0)

  const handleClick = (e) => {
    
    setStateIndex(parseInt(e.target.dataset.index))
   console.log(typeof(e.target.dataset.index))
  }

  return (
    <CrewStyled>
      <h5>02 meet your crew</h5>
      {props.data.filter((el,index) => index === stateIndex).map((element,index) => {
        return (
          <div className="crew" key={index}>
            <img src={element.images.webp} alt={element.name} />
            <CrewNav handleClick={handleClick}/>
            <h4>{element.role}</h4>
            <h3>{element.name}</h3>
            <p>{element.bio}</p>
          </div>
        )
      })}
    </CrewStyled>
    
  )
}

export default Crew
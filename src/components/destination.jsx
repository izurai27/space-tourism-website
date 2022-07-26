import React, {useState} from 'react'
import { DestinationStyled } from '../styled.components/destination.style'
import DestinationNav from './destNav'
// import data from '../data.json'

const Destination = (props) => {
  console.log(props.data)

  const [viewDest,setViewDest] = useState('Moon');

  const handleView = (e) => {
    console.log(e.target.innerHTML)
    setViewDest(e.target.innerHTML)
  }

  return (
    <DestinationStyled>
      <div><span>01</span>PICK YOUR DESTINATION</div>
    {props.data.filter(el => el.name === viewDest).map((element,index) => {
      
      return(
        <div key={index}>
          <img src={element.images.png} alt="" />
          {/* <ul>
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul> */}
          <DestinationNav handleView = {handleView}/>
          <h1>{element.name}</h1>
          <p>{element.description}</p>
          <p>AVG.DISTANCE<span>{element.distance}</span></p>
          <p>EST.TRAVEL TIME<span>{element.travel}</span></p>

        </div>
      )
    })}
    </DestinationStyled>
  )
}

export default Destination
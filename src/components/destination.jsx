import React, {useState} from 'react'
import  DestinationStyled  from '../styled.components/destination.style'
import DestinationNav from './destNav'
// import data from '../data.json'

const Destination = (props) => {
 
  const [viewDest,setViewDest] = useState('Moon');

  const handleView = (e) => {
  
    setViewDest(e.target.innerHTML)
  }

  return (
    <DestinationStyled>
      <div className='h5heading'><span className='numberDark'>01</span><h5>PICK YOUR DESTINATION</h5></div>
    {props.data.filter(el => el.name === viewDest).map((element,index) => {
      
      return(
        <div key={index} className='destDetail'>
          <img src={element.images.png} alt="" />
          
          <DestinationNav handleView = {handleView}/>
          <h2>{element.name}</h2>
          <p className='desc'>{element.description}</p>
          
          <div className="info">
            <div className='subheading'>
              <p className='subheading2'>AVG.DISTANCE</p>
              <p className='subheading1'>{element.distance}</p>
            </div>
            <div  className='subheading'>
              <p className='subheading2'>EST.TRAVEL TIME</p>
              <p className='subheading1'>{element.travel}</p>
            </div>
          </div>

        </div>
      )
    })}
    </DestinationStyled>
  )
}

export default Destination
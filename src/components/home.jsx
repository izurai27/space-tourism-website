import React from 'react'
import { HomeStyled } from '../styled.components/home.styled'
// import data from '../data.json'

const Home = () => {

 

  return (
    <HomeStyled>
      <div className="container">
        <h5>So, you want to travel to</h5>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we’ll give you a truly out of this world experience!</p>

      </div>
      
      <button className='btnExplore'>Explore</button>
    

    </HomeStyled>
  )
}

export default Home
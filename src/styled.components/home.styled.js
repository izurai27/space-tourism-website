import styled from "styled-components";
import bgImg from '../assets/home/background-home-mobile.jpg'

const HomeStyled = styled.main`
  background-image: url(${bgImg});
  min-height: 100vh;
  background-size: cover;
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top:calc(112/16*1rem);
  padding-bottom: calc(48/16*1rem);
  justify-content: space-between;
  box-sizing: border-box;
  row-gap : calc(81/16*1rem);
  padding-inline:calc(24/375*100vw);

  .container{
    display:flex;
    flex-direction: column;
    row-gap: 1rem;
    max-width: calc(327/16*1rem);
   
  }

  .subtitle{
    font-family: 'Barlow Condensed', sans-serif;
    font-size: calc(16/16*1rem);
    letter-spacing: 2.7px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px){
    padding-top:calc(202/16*1rem);
    row-gap : calc(156/16*1rem);
    padding-bottom: calc(90/16*1rem);
    background-image: url('./assets/home/background-home-tablet.jpg');

    .container{
      row-gap: calc(24/16*1rem);
      max-width: calc(450/768*100%);
      
    }

    @media only screen and (min-width: 1440px){
      padding-top:calc(387/16*1rem);
      padding-inline:calc(165/16*1rem);
      flex-direction: row;
      background-image: url('./assets/home/background-home-desktop.jpg');

      .container{
        align-items: flex-start;
        row-gap: calc(24/16*1rem);
        max-width: calc(445/1440*100vw);
        text-align: left;
      }

    }
  }


`

export default HomeStyled
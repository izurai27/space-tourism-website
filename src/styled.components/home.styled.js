import styled from "styled-components";
import bgImg from '../assets/home/background-home-mobile.jpg'

export const HomeStyled = styled.main`
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

  

  .container{
    display:flex;
    flex-direction: column;
    row-gap: 1rem;
    width: calc(327/375*100%);
   
  }

  .subtitle{
    font-family: 'Barlow Condensed', sans-serif;
    font-size: calc(16/16*1rem);
    letter-spacing: 2.7px;
    text-transform: uppercase;
  }
`
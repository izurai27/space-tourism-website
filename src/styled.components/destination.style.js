import styled from "styled-components";
import bgImg from '../assets/destination/background-destination-mobile.jpg'

export const DestinationStyled = styled.main`
  background-image:url(${bgImg});
  /* background-size: cover; */
  background-color: blue;

  padding-top:100px;

  img{
    width:40px;
    aspect-ratio: 1;
  }
`
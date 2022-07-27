import styled from "styled-components";
import bgImg from '../assets/destination/background-destination-mobile.jpg'

export const DestinationStyled = styled.main`
  background-image:url(${bgImg});
  display:flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding-top:100px;

  .destDetail{
    display:flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
  }

  img{
    width:calc(170/16*1rem);
    aspect-ratio: 1;
  }

  h1{
    text-transform: uppercase;
  }

  .desc{
    width: calc(327/375*100%);
    text-align: center;
    margin-top:-2rem;
  }

  .info{
    width: calc(327/375*100%);
    border-top:1px solid #383B4B;
  }
`
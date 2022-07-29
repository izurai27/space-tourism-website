import styled from "styled-components";
import bgImg from '../assets/destination/background-destination-mobile.jpg'

const DestinationStyled = styled.main`
  background-image:url(${bgImg});
  background-repeat: no-repeat;
  display:flex;
  flex-direction: column;
  align-items: center;
  /* row-gap: 2rem; */
  /* padding-top:100px; */

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
    padding-top:calc(32/16*1rem);
    padding-bottom:calc(58/16*1rem);
    display:grid;
    row-gap:2rem;
  }

  .subheading{
    display:grid;
    row-gap: 12px;
  }
  .subheading1{
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  .subheading2{
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 2.3625px;
    text-transform: uppercase;

    color: #D0D6F9;
  }

  @media only screen and (min-width:768px){
    background-image: url('./assets/destination/background-destination-tablet.jpg');
    
  
    img{
      width:calc(300/16*1rem);
      
    }

    .info{
      display:flex;
      justify-content: space-evenly;
      width:calc(573/768*100vw);
    }

    .desc{
      width: calc(573/768*100vw);
      
    }
  
  }

  @media only screen and (min-width:1440px){
    

    .destDetail{
      display:grid;
      grid-template-areas: 'image nav'
                            'image head2'
                            'image desc'
                            'image info';
      
      width:100vw;
      justify-content: space-evenly;

      

    }

    nav{
        grid-area:nav;
      }

    img{
      grid-area: image;
      width:calc(445/16*1rem);
    }

    h2{
      grid-area:head2;

    }

    .desc{
      grid-area:desc;
    }

    .info{
      grid-area:info;
      width:calc(444/16*1rem);
      justify-content: flex-start;
      
      
      
    }

    p.subheading2, p.subheading1{
      text-align:left;
      margin-right:calc(79/16*1rem);
    }

    p.desc{
      width:calc(444/16*1rem);
      text-align: left;
    }

  }
`

export default DestinationStyled 
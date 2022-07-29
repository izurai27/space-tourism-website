import styled from "styled-components";

const TechStyled = styled.main`
  background-image: url('./assets/technology/background-technology-mobile.jpg');
  
  
  .tech{
    display:grid;
    justify-items: center;
    grid-template-areas: 'picture'
    'nav'
    'termin'
    'h3'
    'desc';
    text-align: center;
    
  }

  picture{
    display:grid;
    justify-content:center;
    height:calc(170/16*1rem);
    grid-area:picture;
    margin-bottom:calc(34/16*1rem);
  }
  
  img{
    width:100%;
  }

  .terminology{
    grid-area:termin;
    margin-bottom: calc(9/16*1rem);
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: calc(14/16*1rem);
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
  }

  h3{
    grid-area:h3;
    margin-bottom: 1rem;
  }

  .description{
    grid-area:desc;
    width:calc(327/375*100vw);
  }

  nav{
    grid-area:nav;
    margin-bottom:calc(26/16*1rem);
  }

  @media only screen and (min-width:768px){
    nav{
      margin-bottom:calc(44/16*1rem);
    }

    picture{
      height:calc(310/16*1rem);
      margin-bottom:calc(56/16*1rem);
    }

    .terminology{
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    
    }

    .description{
      width:calc(458/768*100vw);
    }
  }

  @media only screen and (min-width:1440px){
    
    .tech{
      grid-template-areas: 'nav termin picture'
      'nav h3 picture'
      'nav desc picture';
      
      height:fit-content;
      align-content: center;
    }

    picture{
      height:calc(527/16*1rem);
      margin-bottom:calc(0/16*1rem);
    }

    .terminology{
      width:fit-content;
      margin-top:100px;
      text-align: left;
      width:calc(470/16*1rem);
      margin-bottom: calc(0/16*1rem);
    }

    .description{
      width:calc(444/16*1rem);
      text-align: left;
    }

    nav{
      margin-bottom:0;
    }

    h3{
      margin-bottom:0;
    }
                         
  }

`

export default TechStyled
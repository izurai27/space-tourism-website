import styled from "styled-components";

const CrewStyled = styled.main`
  background-image: url('./assets/crew/background-crew-mobile.jpg');
  background-size: cover;
  
  /* padding-bottom:calc(104/16*1rem); */
  display:flex;
  flex-direction: column;
  /* row-gap: 2rem; */
  background-position:top left;
  

  .crew{
    display:flex;
    flex-direction: column;
    align-items: center;
    
    /* row-gap:8px; */
  }

  img{
    height:calc(223/16*1rem);
  }

  .imgContainer{
    width:calc(327/375*100vw);
    border-bottom:1px solid grey;
    display:flex;
    justify-content: center;
  }

  p{
    text-align: center;
    margin-top:8px;
    width:calc(327/375*100vw);
  }

  @media only screen and (min-width:768px){
   
    padding-bottom:0;
    
    align-items: center;
    position:relative;
    z-index:-1;
    
    .crew{
      flex-direction: column-reverse;
      height:80%;
      justify-content: space-between;
      position:absolute;
      bottom:0;
      z-index:1;
      text-align: center;
    }

    
  img{
    /* width:calc(572/16*1rem); */
    /* height:auto; */
    transform:translateY(40px);
    height:100%;
  }

  .imgContainer{
    height: calc(572/16*1rem);
    overflow:hidden;}

  }

  p{
    width:calc(458/16*1rem);
  }

  .information{
          
      &>*{
        text-align: center;
      }

    }

  @media only screen and (min-width:1440px){
    
    .crew{
      display:grid;
      grid-template-areas:  ' info image'
                            ' nav image';
      
      width:100vw;
      height: fit-content;
      padding-left:165px;
      padding-right:137px;
      box-sizing: border-box;
      justify-content: center;
      column-gap: 81px;
    }

    .imgContainer{
      grid-area:image;
      /* width:calc(568/16*1rem); */
      border:none;
      width: fit-content;
      overflow:visible;}
        
    }

    img{
      /* transform:translate(-40px); */
      height: calc(712/16*1rem);
      transform:translateY(-140px);
    }
    .information{
      grid-area:info;
      
      &>*{
        text-align: left;
      }

    }

    h4{
      margin-bottom:calc(15/16*1rem);
    }

    h3{
      margin-bottom:calc(27/16*1rem);
    }
    nav{
        grid-area:nav;
    }

  
`

export default CrewStyled
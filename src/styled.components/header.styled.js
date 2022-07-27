import styled from "styled-components";

const HeaderStyled = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position:absolute; 
  width:100vw;
  padding:calc(24/16*1rem);
  box-sizing: border-box;
  overflow-x: hidden;
  
  .line{
    display:none;
  }

  .logo{
    height:calc(40/16*1rem);
  }


  @media screen and (min-width:768px) {
    .logo{
      height:calc(48/16*1rem);
    }

    .menu{
      display:none;
    }

  }


  @media screen and (min-width:1440px) {
    padding: calc(64/16*1rem);
    height:fit-content;
    justify-content: flex-start;
    column-gap: calc(64/16*1rem);

    
    .line{
      display:block;
      width:calc(473/1440*100vw);
      height:1px;
      background-color: hsla(0, 0%, 100%, 1);
      border:none;
      margin:0;
    }

   
  }

`

export default HeaderStyled
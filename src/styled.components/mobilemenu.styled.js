import styled from "styled-components";

export const MobileMenuStyled = styled.nav`
  width:calc(254/375*100vw);
  /* width:100%; */
  height: 100vh;
  position:absolute;
  top:0;
  right:0;
  display:flex;
  flex-direction: column;
  row-gap:calc(64/16*1rem);
  padding:2rem 2rem;
  background-color: hsl(0,0%,100%,0.04);
  backdrop-filter:blur(40px);
  margin:0;
  box-sizing: border-box;
  z-index:10;
  
  img{
    width:19px;
    align-self: flex-end;
  }
  
  ul{
    width:fit-content;
    display:grid;
    row-gap: 40px;
  }
  
  li{
    
    text-decoration: none;
    display:flex;
    column-gap: 11px;
    align-items: center;
    
  }
  
  li .link{
    font-size: 1rem;
    font-weight: 400;
    line-height: 19px;
    text-decoration:none;
    color:white;
  }

  .number{
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

`
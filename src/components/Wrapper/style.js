import styled from "styled-components";

export const Container = styled.div`
  font-family: Saira;
  flex-basis: 48%;

  .title{
    font-size: 36px;
    font-weight: 700;
    line-height: 57px;
    text-align: left;
  }

  .wrapper{
    width: 100%;
    background-color: transparent;
  }

  @media (max-width:426px){
    flex-basis: 100%;
  }

`;
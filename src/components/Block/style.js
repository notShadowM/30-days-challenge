import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  font-family: Saira;
  background-color: transparent;
  color:#55545C;
  border-bottom: 1px solid #E9E9E9;
  padding-bottom: 0.3rem;

  
  .question{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.8rem;
    cursor: pointer;
    padding-top: 1.2rem;
    padding-bottom: 0.4rem;
  }

  .q-title{
    font-size: 14px;
    font-weight: ${({active})=>active?"700":"400"};
    line-height: 22px;
  }

  .question:hover .q-title{
    color:${({active})=>active?"":"#5B36A0"};
  }

  .para{
    margin-top: 0.5rem;
    font-size: 12px;
    line-height: 19px;
    text-align: left;
    padding-right: 1.5rem;
    max-height: ${({active})=>active?"10rem":"0"};
    overflow: hidden;

    transition:max-height 450ms cubic-bezier(0.68,-0.06, 0.38, 1.13);
  }

  .iconify{
    color:#F47B56;
    animation: ${({active})=> active?"roll 500ms cubic-bezier(1, 0, 0, 1) forwards":"rollback 500ms cubic-bezier(1, 0, 0, 1) forwards"};
    font-size: 1.4rem;
    
  }
  
  
  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes rollback {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @media (max-width:768px){
    .question:hover .q-title{
    color:inherit;
    }
  }

  @media (max-width:321px){
    .question{
      padding-right: 0.2rem;
    }
  }

`;
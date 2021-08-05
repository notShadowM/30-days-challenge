import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: #4CAAB3;
  position: absolute;
  top: 30%;

  @media (max-width:426px){
    height: 40vh;
    top: 30%;

  }
  
`
export const Black = styled.div`
  width: 600px;
  height: 600px;
  background-color: #222730;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 3.5s linear forwards;

  @keyframes spin{
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(405deg);
    }
  }
  

  .blue{
    width: 400px;
    height: 400px;
    background-color: #4CAAB3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle{
    width: 100px;
    height: 100px;
    background-color: #222730;
    border-radius: 50%;
    /* animation: zoom linear 550ms; */
    animation-name: zoom,zoom-in-out;
    animation-duration:550ms,2s;
    animation-iteration-count: 1,2;
    animation-delay: 0ms,550ms;
  }

  @keyframes zoom{
    0%{
      transform: scale(20,20);
    }
    100%{
      transform: scale(1,1);
    }
  }
  @keyframes zoom-in-out{
    0%{
      transform: scale(1,1);
    }
    50%{
      transform: scale(2.5,2.5);
    }
    100%{
      transform: scale(1,1);
    }
  }

  

  @media (max-width:1024px){
    width: 600px;
    height: 600px;
    .blue{
      width: 400px;
      height: 400px;
    }
    .circle{
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width:768px){
    width: 500px;
    height: 500px;
    .blue{
      width: 350px;
      height: 350px;
    }
    .circle{
      width: 90px;
      height: 90px;
    }
  }
  @media (max-width:426px){
    width: 280px;
    height: 280px;
    .blue{
      width: 180px;
      height: 180px;
    }
    .circle{
      width: 60px;
      height: 60px;
    }
  }
  @media (max-width:376px){
    width: 250px;
    height: 250px;
    .blue{
      width: 160px;
      height: 160px;
    }
    .circle{
      width: 55px;
      height: 55px;
    }
  }
  @media (max-width:325px){
    width: 220px;
    height: 220px;
    .blue{
      width: 140px;
      height: 140px;
    }
    .circle{
      width: 45px;
      height: 45px;
    }
  }
  
`
import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  background-color: #fff;
  margin:10rem auto;
  display: flex;
  justify-content: space-between;
  padding: 7rem;
  border-radius: 25px;
  position: relative;

  .leftPic{
    position: relative;
    height: 26.5rem;
    left: 0;
  }
  .sidePic{
    position: absolute;
    width: 32rem;
    left: -7rem;
  }
  .cube{
    width: 16rem;
    position: absolute;
    left:-18.2rem;
    bottom: 0;
  }

  @media (max-width:1024px){
    width: 70%;
    padding: 4rem;
    
    .sidePic{
      width: 24rem;
      left: -4rem;
    }

    .cube{
      width: 12rem;
      left:-12rem;
      bottom: 1rem;
    }
  }

  @media (max-width:768px){
    width: 84%;
    padding: 2rem;
    
    .sidePic{
      width: 22rem;
      left: -2rem;
    }

    .cube{
      width: 10rem;
      left:-8.8rem;
      bottom: 1.2rem;
    }
  }

  @media (max-width:426px){
    padding: 8rem 2rem 3rem;
    width: 90%;
    .resPicContainer{
      position: absolute;
      width: 100%;
      top: -16rem;
      left: -1rem;
      display: flex;
      justify-content: center;
    }
    .resPic{
      width: 22rem;
    }
  }

  @media (max-width:376px){
    padding: 8rem 1rem 3rem;
    width: 94%;
  }
  @media (max-width:321px){
    padding: 8rem 0.8rem 3rem;
    width: 94%;
  }
`;
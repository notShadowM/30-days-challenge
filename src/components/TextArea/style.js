import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 2px solid #F9FAFA;
  height: 90%;
  border-radius: 12px;
  position: relative;

  .textarea{
    margin-top: 2rem;
    width: 100%;
    height: 68%;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    padding: 0.5rem 1rem 0.5rem;
    outline: none;
    border:none;
    resize: none;
    color: ${({Color}) => Color};
    overflow-y: auto;
  }

  .textarea::-webkit-scrollbar {
  width: 0.2em;
  }
 
  .textarea::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  
  .textarea::-webkit-scrollbar-thumb {
    background-color: rgba(243, 172, 60, 1);
    outline: 1px solid rgba(243, 172, 60, 0.5);
  }


  .counter{
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    color: #CED5DE;
    position: absolute;
    top: 1rem;
    right: 1rem;
    /* top: 0.5rem;
    right: 0.5rem;
    background-color: #fff;
    padding: 0.5rem; */
  }

  .colorbox{
    font-size: 13px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    color: #CED5DE;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    user-select:none;

  }

  .colors{
    flex-basis: 70%;
    display: flex;
    justify-content: space-between;
  }


 

  .color{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    /* animation: scaling 2.5s ease-in-out 2; */

    animation-name: shadeReverse,scaling,shade;
    animation-duration:200ms,1.5s,500ms;
    animation-iteration-count: 1,2,1;
    animation-timing-function: ease-in-out;
  }

  .true{
    margin-top: 0.1rem;
  }

  @keyframes scaling{
    0%{
      transform: scale(1);
      background-color: #30FFB7;
    }
    40%{
      transform: scale(0.2);
      background-color: #07DEFF;
    }
    50%{
      transform: scale(0.2);
      background-color: #0761FF;
    }
    100%{
      transform: scale(1);
      background-color: #30FFB7;
    }
  }

  @keyframes shade {
    from {background-color: #30FFB7;}
    to {background-color: inherit;}
  }

  @keyframes shadeReverse {
    from {background-color: inherit;}
    to {background-color: #30FFB7;}
  }
 
  .color:nth-child(1){
    animation-delay:0.2s,0.2s,3.2s;
  }
  .color:nth-child(2){
    animation-delay:0.4s,0.4s,3.4s;
  }
  .color:nth-child(3){
    animation-delay:0.6s,0.6s,3.6s;
  }
  .color:nth-child(4){
    animation-delay:0.8s,0.8s,3.8s;
  }
  .color:nth-child(5){
    animation-delay:1s,1s,4s;
  }


  /* .black{
    color: #ddd;
  } */
`;
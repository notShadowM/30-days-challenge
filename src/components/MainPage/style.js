import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  width: min(400px,100vw);
  padding: 24px 20px;
  background-color: #181A1C;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  
  .img{
    width: 100%;
    height: auto;
  }

  .user-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .user-block{
    display: flex;
    align-items: center;

  }
  .avatar{

  }

  .username{
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color:#F3F3F3;
    margin-left: 0.8rem;
  }

  .btn{
    background: linear-gradient(96.95deg, #FF293C 0%, #FB3175 100%);
    color:#F3F3F3;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .follow{
    border-radius: 26px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.05em;
    width: 5rem;
    height: 1.5rem;


  }

  .texts-block{
    width: 100%;
    text-align: left;
    margin-top: 11px;
    letter-spacing: 0.015em;
  }

  .headline{
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    padding-right: min(4.3rem,20vw);
  }

  .light-text{
    color: #79797B;
    font-size: 11px;
    line-height: 13px;
    margin-top: 0.5rem;
  }
  .interaction-block{
    width: 100%;
    margin-top: 1rem;
    display: flex;
  }
  .interaction-btns{
    background: #3A3C3D;
    color:#fff;
    border-radius: 48px;
    width: 35px;
    height: 35px;
    margin-right: 11px;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  }

  .icons{
    width: 18px;
    height: 18px;
  }

  .msg-btn{
    width: 100%;
    border-radius: 12px;
    text-align: center;
    margin-top: 1rem;
    height: 3.5rem;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.05em;
  }
`;
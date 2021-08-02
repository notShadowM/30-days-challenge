import styled from "styled-components";

export const Container = styled.div`
  background-color: #F3AC3C;
  border-radius: 0px 50px;
  width: 80px;
  height: 60px;
  transform: ${({flip})=> flip?"scaleX(-1)":""};
  margin:14px;
`;
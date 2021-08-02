import styled from "styled-components";

export const Container = styled.div`
  background-color: #1A4341;
  border-radius: 0px 50px;
  width: 80px;
  height: 100px;
  transform: ${({flip})=> flip?"scaleX(-1)":""};
  margin:14px;
`;
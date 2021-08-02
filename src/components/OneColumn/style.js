import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Column = styled.div`
  transform: ${({flip})=> flip?"scaleY(-1)":""};
`
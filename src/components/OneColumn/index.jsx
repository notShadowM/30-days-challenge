import React from 'react';
import BlackShape from '../BlackShape';
import YellowShape from '../YellowShape';
import { Container,Column } from './style';

export default function OneColumn() {
  return (
    <Container>  
      <Column>
        <BlackShape />
        <YellowShape />
        <BlackShape />
        <YellowShape />
      </Column>
      <Column flip>
        <BlackShape />
        <YellowShape />
        <BlackShape />
        <YellowShape />
      </Column>
    </Container>
  )
}

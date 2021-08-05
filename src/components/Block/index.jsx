import React,{useState} from 'react';
import {Container} from "./style";
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

export default function Block({question,answer}) {
  const [slide,setSlide] = useState(false); 
  return (
    <Container active={slide}>
      <div className="question" onClick={() =>setSlide(prev => !prev)}>
        <div className="q-title">{question}</div>
        <div className="iconify">
          <Arrow />
        </div>
      </div>
      <div className="para">
        {answer}
      </div>
    </Container>
  )
}

import React,{useState} from 'react';
import Block from "../Block";
import { Container } from './style';


export default function Wrapper() {
  const [block1,setBlock1] = useState(false);
  const [block2,setBlock2] = useState(false);
  const [block3,setBlock3] = useState(false);
  const [block4,setBlock4] = useState(false);
  const [block5,setBlock5] = useState(false);
  return (
    <Container>
      <div className="title">
        FAQ
      </div>
      <Block active={block1} handleClick={setBlock1}/>
      <Block active={block2} handleClick={setBlock2}/>
      <Block active={block3} handleClick={setBlock3}/>
      <Block active={block4} handleClick={setBlock4}/>
      <Block active={block5} handleClick={setBlock5}/>
    </Container>
  )
}

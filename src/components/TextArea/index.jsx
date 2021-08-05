import React,{useState} from 'react';
import { Container } from './style';
import { ReactComponent as True } from '../../assets/True.svg';
import ContentEditable from 'react-contenteditable';
import {maxlengthContentEditable} from 'maxlength-contenteditable';


export default function TextArea() {
  const [Counter,setCounter] = useState(0);
  const [Color,setColor] = useState("#000000")
  const colors = ["#FE636F","#FFDE6A","#70CF98","#2984FF","#725CFD"];
  const [Textarea,setTextarea] = useState();
  const [First,setFirst] = useState(true);


  const handleColor = (e)=>{
    const div = document.getElementById("mad");
    const type = e.target.id;
    if(Color === type){
      setTextarea(prev => `<span contentEditable=false style=color:${type}>${prev}</span>`);
      setColor("#000000");
      div.focus();
    }else if(First){
      setTextarea(prev => `<span contentEditable=false style=color:#000>${prev}</span>`);
      setColor(type);
      setFirst(false);
      div.focus();
    }else{
      setTextarea(prev => `<span contentEditable=false style=color:${Color}>${prev}</span>`);
      setColor(type);
      div.focus();
    }
  }


  maxlengthContentEditable();

  return (
    <Container Color={Color}>
      {/* <textarea className="textarea" name="textarea" maxLength="1500" cols="30" rows="10"
       onChange={(e) =>{
         setCounter(e.target.value.length);
         setTextarea(e.target.value);
         }} value={textarea}/> */}
      <ContentEditable
        html={Textarea}
        disabled={false}
        onChange={(e)=> {setTextarea(e.target.value);setCounter(e.target.value.length)}}
        className="textarea"
        data-max-length ="1500"
        id="mad"
        
      />
         
      <span className="counter">{Counter}/1500</span>
      <div className="colorbox">
        <div>Color</div>
        <div className="colors">
          {colors.map((color,id) => <span key={id} className="color" id={color} style={{backgroundColor:color}} 
            onClick={(e) => {handleColor(e)}}>
            <True className="true" style={{visibility:`${color === Color?"visible":"hidden"}`}}/>
          </span>)}
        </div>
      </div>
    </Container>
  )
}

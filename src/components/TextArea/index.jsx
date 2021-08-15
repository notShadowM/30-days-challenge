import React,{useState,useEffect} from 'react';
import { Container } from './style';
import { ReactComponent as True } from '../../assets/True.svg';
import { ReactComponent as Send } from '../../assets/Send.svg';
import { ReactComponent as Add } from '../../assets/Add.svg';
import ContentEditable from 'react-contenteditable';
import {maxlengthContentEditable} from 'maxlength-contenteditable';


export default function TextArea() {
  const [Counter,setCounter] = useState(0);
  const [Color,setColor] = useState("#000000")
  const [Colors,setColors] = useState(["#FE636F","#FFDE6A","#70CF98","#2984FF","#725CFD"]);
  const [Textarea,setTextarea] = useState("");
  const [SendMsg,setSendMsg] = useState(false);
  const [ColorPicker ,setColorPicker] = useState("");

  useEffect(()=>{
    document.getElementById("mad").focus();
    if(SendMsg){
      setTimeout(()=>{setSendMsg(false);setTextarea("");setCounter(0);setColor("#000000")}, 1500);
    }
  })

  const changeColor = (e) =>{
    const div = document.getElementById("mad");
    const type = e.target.id;

    e.preventDefault();
    const length = window.getSelection().toString().length;
    if( length > 0){
      document.execCommand("styleWithCSS", false, true);
      document.execCommand("foreColor", false,type);
    }else{
      if(type === Color){
        setColor("#000000");
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("foreColor", false,"#000000");
      }else{
        setColor(type);
        document.execCommand("styleWithCSS", false, true);
        document.execCommand("foreColor", false,type);
      }
    }
    
    div.focus();
  }

  const handleCounter = (e) =>{
    setCounter(e.target.value.replaceAll(/<div>|<br>|<\/div>/gi,"").replaceAll(/&nbsp;/gi," ").length);
  }

  

  maxlengthContentEditable();

  return (
    <Container>
      <ContentEditable
        html={Textarea}
        disabled={false}
        // onChange={(e)=> {setTextarea(e.target.value);setCounter(e.target.value.length);}}
        onChange={(e)=> {setTextarea(e.target.value);handleCounter(e)}}
        className="textarea"
        data-max-length ="1500"
        id="mad"
      />
         
      <span className="counter">{Counter}/1500</span>
      <div className="colorbox">
        <div>Color</div>
        <div className="colors">
          {Colors.map((color,id) => <span key={id} className="color" id={color} style={{backgroundColor:color}} 
            onClick={(e) => {changeColor(e)}}>
            <True  className="true" style={{visibility:`${color === Color?"visible":"hidden"}`,pointerEvents:"none"}}/>
          </span>)}

          {/* <label htmlFor="picker" className="color plus" onClick={e => setColorPicker("")}>
            <label htmlFor="picker" style={{cursor:"pointer"}}>
              <Add fill="#fff" width="10px" height="10px" style={{pointerEvents:"none",marginRight:"0.5px",marginBottom:"0.5px"}}/>
            </label>
            <input type="color" id="picker" name="picker" value={ColorPicker} 
            onChange={e => setColorPicker(e.target.value)}
            />
            
          </label> */}
        </div>
      </div>

      <button className="send-btn" onClick={e => setSendMsg(true)}>
        {SendMsg?<div className="load"/>:<Send className="send-icon"/>}
        Send
      </button>
    </Container>
  )
}

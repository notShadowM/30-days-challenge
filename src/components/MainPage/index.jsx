import React,{useState,useEffect} from 'react';
import { Container } from './style';
import Wrapper from '../Wrapper';
import {ReactComponent as PicResponsive} from "../../assets/PicResponsive.svg";
import {ReactComponent as PicNormal} from "../../assets/PicNormal.svg";
import {ReactComponent as Cube} from "../../assets/Cube.svg";

export default function MainPage() {
  const [width, setWidth] = useState();

    useEffect(() => {
      setWidth(window?.innerWidth);
      const handleWidth = () =>{
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleWidth);
  
      return () => {
        window.removeEventListener('resize', handleWidth)
      }
    },[])

    const ConditionalComp = () =>{
      if(width<=426){
        return (
          <div className="resPicContainer">
            <PicResponsive className="resPic"/>
          </div>
        );
      }else{
        return(
          <div className="leftPic">
            <PicNormal className="sidePic"/>
            <Cube className="cube"/>
          </div>
        )
      }
    }
  return (
    <Container>
      <ConditionalComp />
      <div style={{display:`${width<=425?"none":"block"}`}}></div>
      <Wrapper />
    </Container>
  )
}

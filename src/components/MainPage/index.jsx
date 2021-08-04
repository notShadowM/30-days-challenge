import React,{useEffect, useState} from 'react';
import {Container} from "./style";
import { ReactComponent as Cover } from '../../assets/Cover.svg';
import { ReactComponent as Avatar } from '../../assets/Avatar.svg';
import { Icon, InlineIcon } from '@iconify/react';
import heartIcon from '@iconify-icons/akar-icons/heart';
import shareForwardLine from '@iconify-icons/ri/share-forward-line';
import heartFilled from '@iconify/icons-ant-design/heart-filled';

export default function MainPage() {

  const [follow,SetFollow] = useState("follow");
  const [love,setLove] = useState(false);

  const HeartBtn = () =>{
    if(love){
      return(
        <Icon icon={heartFilled} className="icons"/>
      )
    }else{
      return(
        <Icon icon={heartIcon} className="icons"/>
      )
    }
  }
  return (
    <Container>
      <Cover className="img"/>
      <div className="user-row">
        <div className="user-block">
          <Avatar />
          <div className="username">Alaa Hijazi</div>
        </div>
        <button className="btn follow" onClick={()=>{follow==="follow"?SetFollow("following"):SetFollow("follow")}}>{follow}</button>
      </div>
      <div className="texts-block">
        <p className="headline">
          Experience The Sport Light With Alaa Hijazi
        </p>
        <p className="light-text">Whatever you say, Hello</p>
      </div>
      <div className="interaction-block">
        <button className="interaction-btns" onClick={()=>{setLove((prev)=>!prev)}}>
          <HeartBtn />
        </button>
        <button className="interaction-btns">
          <Icon icon={shareForwardLine} className="icons" flip="horizontal"/>
        </button>
      </div>
      <button className="msg-btn btn">Message</button>
    </Container>
  )
}

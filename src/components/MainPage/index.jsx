import React from 'react';
import {Container} from "./style";
import { ReactComponent as Cover } from '../../assets/Cover.svg';
import { ReactComponent as Avatar } from '../../assets/Avatar.svg';
import { Icon, InlineIcon } from '@iconify/react';
import heartIcon from '@iconify-icons/akar-icons/heart';
import shareForwardLine from '@iconify-icons/ri/share-forward-line';

export default function MainPage() {
  return (
    <Container>
      <Cover className="img"/>
      <div className="user-row">
        <div className="user-block">
          <Avatar />
          <div className="username">Alaa Hijazi</div>
        </div>
        <button className="btn follow">follow</button>
      </div>
      <div className="texts-block">
        <p className="headline">
          Experience The Sport Light With Alaa Hijazi
        </p>
        <p className="light-text">Whatever you say, Hello</p>
      </div>
      <div className="interaction-block">
        <button className="interaction-btns">
          <Icon icon={heartIcon} className="icons"/>
        </button>
        <button className="interaction-btns">
          <Icon icon={shareForwardLine} className="icons" flip="horizontal"/>
        </button>
      </div>
      <button className="msg-btn btn">Message</button>
    </Container>
  )
}

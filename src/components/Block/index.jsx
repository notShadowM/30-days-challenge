import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';
import {Container} from "./style"

export default function Block({active,handleClick}) {
  return (
    <Container active={active}>
      <div className="question" onClick={() =>handleClick(prev => !prev)}>
        <div className="q-title">How many team members can i invite?</div>
        <Icon icon={arrowDownAlt2} className="iconify" />
      </div>
      <div className="para">
        No more that 2GB. All files in your account must  fit your allotted storge space.
      </div>
    </Container>
  )
}

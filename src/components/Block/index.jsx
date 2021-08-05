import { useState } from "react";
import { Icon } from "@iconify/react";
import arrowDownAlt2 from "@iconify-icons/dashicons/arrow-down-alt2";
import {Container} from "./style";

export default function Block({ question, answer }) {
  const [active, setActive] = useState(false);

  return (
    <Container active={active}>
      <div className="question" onClick={() => setActive(!active)}>
        <div className="q-title">{question}</div>
        <Icon icon={arrowDownAlt2} className="iconify" />
      </div>
      <div className="para">{answer}</div>
    </Container>
  );
}

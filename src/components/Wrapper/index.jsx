import Block from "../Block";
import { Container } from "./style";

export default function Wrapper() {
  const faqs = [
    {
      question: "How many team members can I invite?",
      answer: "No more that 2GB. All files in your account must  fit your allotted storge space."
    },
    {
      question: "How many team members can I invite?",
      answer: "No more that 2GB. All files in your account must  fit your allotted storge space."
    },
    {
      question: "How many team members can I invite?",
      answer: "No more that 2GB. All files in your account must  fit your allotted storge space."
    },
    {
      question: "How many team members can I invite?",
      answer: "No more that 2GB. All files in your account must  fit your allotted storge space."
    }
  ];
  return (
    <Container>
      <div className="title">
        FAQ
      </div>
      {faqs.map(faq => <Block {...faq} />)}
    </Container>
  );
}

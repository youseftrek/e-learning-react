import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Props = {
  id: string;
  question: string;
  answer: string;
};

const Faq = ({ id, question, answer }: Props) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p className="text-muted-foreground">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Faq;

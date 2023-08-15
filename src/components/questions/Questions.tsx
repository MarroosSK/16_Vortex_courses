import "./Questions.css";
//import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem: React.FC<
  import("@szhsin/react-accordion").AccordionItemProps
> = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={"chevron"} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={"item"}
    buttonProps={{
      className: ({ isEnter }) =>
        `${"itemBtn"} ${isEnter && "itemBtnExpanded"}`,
    }}
    contentProps={{ className: "itemContent" }}
    panelProps={{ className: "itemPanel" }}
  />
);

const Questions = () => {
  const FAQData = [
    {
      question: "How Vortex work ?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      question: "What is the main process open account ?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      question: "How to start Learning?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      question: "How to pick up instructor?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];
  return (
    <section id="qa" className="questions">
      <div className="container">
        <div className="questions__wrapper">
          <div className="questions__left">
            <h2>
              Questions & <span className="highlight">Answers</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              dolore?
            </p>
          </div>
          <div className="questions__right">
            {FAQData.map((faqItem, index) => (
              <div className={"accordion"}>
                <Accordion transition transitionTimeout={250} key={index}>
                  <AccordionItem header={faqItem.question} initialEntered>
                    {faqItem.answer}
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

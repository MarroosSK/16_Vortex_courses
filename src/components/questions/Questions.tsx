import "./Questions.css";
//import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import { FAQData } from "../../utils/dummyData";

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
              <div className={"accordion"} key={index}>
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

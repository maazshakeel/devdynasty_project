import dataAccordion from "../data/dataAccordion";
import AccordionItem from "./AccordionItem";

export default function AccordionAbout() {
  return (
    <div className="flex flex-col gap-1 my-5 mx-5 sm:mx-0 sm:justify-center">
      <AccordionItem
        title={dataAccordion[0].title}
        content={
          <div dangerouslySetInnerHTML={{ __html: dataAccordion[0].content }} />
        }
      />
      <AccordionItem
        title={dataAccordion[1].title}
        content={
          <div dangerouslySetInnerHTML={{ __html: dataAccordion[1].content }} />
        }
      />
    </div>
  );
}

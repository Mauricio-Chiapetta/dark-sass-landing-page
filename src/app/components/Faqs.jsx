"use client";
import { items } from "../../data/faqsItems";
import { AccordionItem } from "./AccordionItem";

export function Faqs() {
  return (
    <div className="bg-black py-[72px] bg-gradient-to-t from-black to-[#5d2ca8] text-white">
      <div className="container">
        <h2 className="text-center mt-16 font-bold tracking-tighter text-3xl sm:text-5xl">
          Frequently asked questions
        </h2>
        <div className="mt-12 sm:px-40">
          {items.map(({ answer, question }) => (
            <AccordionItem answer={answer} question={question} key={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

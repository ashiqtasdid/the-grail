import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="relative mx-auto max-w-[1113px] bg-[#252525] overflow-hidden px-8 py-20 rounded-xl shadow-lg">
      <div className="relative z-10 mb-6 text-center text-3xl font-bold text-white">
        Frequently Asked Questions
      </div>
      <div className="relative z-10 mx-auto w-full md:w-3/4 lg:w-2/3">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold text-white transition duration-300 hover:text-red-500">
              What is The Grail?
            </AccordionTrigger>
            <AccordionContent className="text-base text-white">
              We are the most hardcore and competitive lifesteal 1.20 on the
              market, suitable for a competition-loving community. With a strong
              focus on combat mechanics and a new competitive system of viewing
              the game thanks to our season system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold text-white transition duration-300 hover:text-red-500">
              How old is it?
            </AccordionTrigger>
            <AccordionContent className="text-base text-white">
              Our team has been working on minecraft servers since 2017, the
              Grail is our latest creation for PvP lovers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold text-white transition duration-300 hover:text-red-500">
              What commands does The Grail have?
            </AccordionTrigger>
            <AccordionContent className="text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is The Grail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are the most hardcore and competitive lifesteal 1.20 on the market, suitable for a competition-loving community. With a strong focus on combat mechanics and a new competitive system of viewing the game thanks to our season system.",
                },
              },
              {
                "@type": "Question",
                name: "How old is The Grail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our team has been working on minecraft servers since 2017, the Grail is our latest creation for PvP lovers.",
                },
              },
            ],
          }),
        }}
      />
    </section>
  );
};

export default FAQ;

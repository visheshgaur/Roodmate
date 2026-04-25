import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    trigger: "Rood Mates Kya hai?",
    content: "Rood Mates ek cloud kitchen service hai jo students aur working professionals ke liye ghar jaisa fresh aur affordable food provide karta hai.",
  },
  {
    value: "item-2",
    trigger: "Kya aap daily meals provide karte ho?",
    content: "Haan, hum daily base par fresh breakfast, lunch aur dinner provide karte hain. Aap subscription ya single order dono choose kar sakte hain.",
  },
  {
    value: "item-3",
    trigger: "Kya subscription plan available hai?",
    content: "Bilkul! Humare paas weekly aur monthly subscription plans hain jo aapki pocket aur diet ke hisaab se design kiye gaye hain.",
  },
  {
    value: "item-4",
    trigger: "Food ka quality aur hygiene kaise maintain hota hai?",
    content: "Hygiene humari priority hai. Humare kitchen mein daily sanitization aur fresh ingredients ka use hota hai.",
  },
  {
    value: "item-5",
    trigger: "Delivery kaise hoti hai?",
    content: "Humare apne delivery partners hain jo ensure karte hain ki aapka khana on-time aur garam mile.",
  },
  {
    value: "item-6",
    trigger: "Kya menu change hota rehta hai?",
    content: "Haan, hum menu ko variety dene ke liye daily basis par dishes rotate karte hain taaki aap bore na ho.",
  },
];

export function Faqs() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-6 md:py-24 bg-white">
      {/* Small Header Tag */}
      <p className="body-text text-base text-[#FFA500] font-semibold mb-2">
         Faq's
        </p>

      {/* Main Title */}
      <h3 className="heading text-3xl md:text-4xl lg:text-6xl text-[#005248] font-bold text-center ">
        Frequently Asked Questions<span className="text-[#FFA500]">.</span>
      </h3>

      <div className="w-full max-w-4xl mt-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="space-y-4"
        >
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.value} 
              value={item.value} 
              className="border-none items-center"
            >
              <AccordionTrigger className="body-text bg-[#E9F3F1] hover:no-underline px-6 py-4 rounded-md text-[#005248] font-semibold text-left md:text-lg transition-all [&[data-state=open]]:rounded-b-none">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="bg-[#E9F3F1] px-6 pb-6 rounded-b-md text-[#005248]/80 text-base leading-relaxed border-t border-[#CCE2DF] py-2">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
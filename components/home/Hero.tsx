
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    
    <section className="hero-section flex flex-col lg:flex-row items-start lg:items-center justify-between px-5 md:px-10 pt-20 lg:px-12 min-h-[80vh] overflow-hidden relative">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col items-start text-left w-full lg:max-w-2xl z-10 mb-10 lg:mb-0">
        <p className="body-text text-base text-[#9AA813] font-semibold mb-2">
          WELCOME TO ROODMATES
        </p>

        <h1 className="heading text-4xl md:text-6xl lg:text-8xl text-white font-bold ">
          Har Room Ka <br />
          <span className="text-[#FFA500]">Food Partner.</span>
        </h1>

        <p className="body-text text-base text-white mb-4 mt-4 max-w-xl">
          Rood Mates brings fresh, affordable aur hygienic meals specially for{" "}
          <b>students aur working professionals</b> jo ghar se door rehte hain.
        </p>

        {/* Added gap to match the 20px feel between buttons */}
        <div className="flex flex-col sm:flex-row mt-4 gap-[20px] w-full sm:w-auto">
          <Button
            variant="secondary"
            className="border rounded-md py-4 px-6 text-md font-semibold"
          >
            Get a Subscription
          </Button>

          <Button
            variant="simple"
            className="border rounded-md py-4 px-6 text-md font-semibold"
          >
            See Menu
          </Button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-end self-end">
        {/* Responsive image container sizing */}
        <div className="w-[280px] sm:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[650px]">
          <Image
            src="/delivery-boy.webp"
            alt="delivery boy"
            width={700}
            height={700}
            priority
            className="w-full h-auto drop-shadow-2xl -mb-1 lg:-mb-4"
          />
        </div>
      </div>
    </section>
  );
};



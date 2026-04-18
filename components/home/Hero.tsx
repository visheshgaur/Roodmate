import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const Hero = () => {
  return (
   
    <section className="hero-section flex flex-wrap items-center justify-between px-4 pt-15 lg:px-8 min-h-[80vh] md:min-h-screen overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex flex-col items-start text-left max-w-2xl gap-1">
        <p className="body-text text-base text-[#9AA813] font-semibold mb-4">
          WELCOME TO ROODMATES
        </p>

        <h1 className=" heading text-4xl md:text-6xl lg:text-8xl text-white font-bold ">
          Har Room Ka <br />
          <span className="text-[#FFA500]">Food Partner.</span>
        </h1>
        <p className="body-text text-base text-white mb-4 mt-4 max-w-xl">
          Rood Mates brings fresh, affordable aur hygienic meals specially for{" "}
          <b>students aur working professionals</b> jo ghar se door rehte hain.
        </p>
        <div className="flex flex-col sm:flex-row mt-4 gap-4 w-full max-w-xl">
          <Button
  variant="secondary"
  className="border rounded-md  py-4 px-3 text-md font-semibold"
>
  Get a Subscription
</Button>

<Button
  variant="simple"
  className="border rounded-md  py-4 px-3 text-md font-semibold"
>
  See Menu
</Button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
     {/* RIGHT CONTENT */}
<div className="flex w-full md:w-1/2 justify-center md:justify-end items-end mt-10 md:mt-0">
  <div className="w-[320px] sm:w-[450px] md:w-[600px] lg:w-[750px]">
    <Image
      src="/delivery-boy.webp"
      alt="delivery boy"
      width={750}
      height={750}
      priority
      className="w-full h-auto drop-shadow-2xl -mb-4"
    />
  </div>
</div>
    </section>
  );
};



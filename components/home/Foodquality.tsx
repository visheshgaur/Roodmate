
import Image from "next/image";
import { Button } from "../ui/Button";
import { FaHeart } from "react-icons/fa";

export const Foodquality = () => {
  return (
    <section className="px-6 py-6 md:px-0 md:py-20 bg-white flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <p className="body-text text-base text-[#FFA500] font-semibold mb-2">
          FOOD QUALITY
        </p>

        <h3 className="heading text-3xl md:text-4xl lg:text-6xl text-[#005248] font-bold ">
          Hum quality ke saath kabhi compromise nahi karte
          <span className="text-[#FFA500]">.</span>
        </h3>
        <p className="body-text text-base mypara mb-4 mt-4 max-w-2xl">
          Har meal me hum sirf fresh aur high-quality ingredients ka use karte
          hain, jisse taste aur health dono ka best experience mile. Cooking
          process ke har step par proper hygiene standards follow kiye jate
          hain, taki aap bina kisi worry ke apna meal enjoy kar sako.
        </p>
        <p className="body-text text-base mypara mb-4 mt-4 max-w-2xl">
          Humari koshish hoti hai ki har plate me aapko balanced aur nutritious
          food mile, jisme proteins, carbs aur essential nutrients ka sahi
          combination ho. Saath hi, hum taste par bhi equal focus rakhte hain,
          taki har bite satisfying aur delicious lage.
        </p>
        <p className="body-text text-base mypara mb-4 mt-4 max-w-2xl">
          Rood Mates ke meals sirf pet bharne ke liye nahi, balki aapko ghar
          jaisa comfort aur satisfaction dene ke liye banaye jate hain.
        </p>
        <p className="body-text text-base mypara mb-4 mt-4 max-w-2xl flex items-center font-semibold">
          Har bite me feel hoga ghar ka taste{" "}
          <span className="ml-2 text-red-500 flex items-center justify-center">
            <FaHeart className="text-xl" />
          </span>
        </p>
        <Button
          variant="secondary"
          className="border rounded-md py-4 px-6 text-md font-semibold"
        >
          Get a Subscription
        </Button>
      </div>
      <div className="w-full md:w-1/2 relative h-[360px] md:h-[520px] mt-6">
        <Image
          src="/food-quality.png"
          alt="about us image"
          fill
          className="object-cover md:object-contain rounded-md"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

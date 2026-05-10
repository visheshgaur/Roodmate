import Image from "next/image"
import { Button } from "../ui/Button"
import Link from "next/link"

export const Aboutus = () => {
  return (
    <section className="px-6 py-10 md:px-10 md:py-20 bg-[#eaeaea] flex flex-col md:flex-row items-center">
  
  <div className="w-full md:w-1/2 relative h-[250px] md:h-[420px]">
    <Image
      src="/Aboutus-image.png"
      alt="about us image"
      fill
      className="object-cover rounded-md"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>

  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
    <p className="body-text text-base text-[#FFA500] font-semibold mb-2">
          ABOUT US
        </p>

        <h3 className="heading text-3xl md:text-4xl lg:text-6xl text-[#005248] font-bold ">
          Ghar Jaisa Food, Har Room Tak
          <span className="text-[#FFA500]">.</span>
        </h3>
         <p className="body-text text-base mypara mb-4 mt-4 max-w-xl">
          Rood Mates ek cloud kitchen hai jo specially students aur working professionals ke liye bana hai jo ghar se door rehte hain.
        </p>
        <p className="body-text text-base mypara mb-4 mt-4 max-w-xl">
         Humara mission hai aapko fresh, hygienic aur affordable meals dena, jo bilkul ghar ke khane jaisa taste kare.
        </p>
        <p className="body-text text-base mypara mb-4 mt-4 max-w-xl">
          Yahan har meal care ke saath prepare hota hai, taki aap bina tension ke apna din enjoy kar sako.
        </p>
         <Link href="/subscription-plan"><Button
            variant="secondary"
            className="border rounded-md py-4 px-6 text-md font-semibold"
          >
            Get a Subscription
          </Button></Link>
  </div>

</section>
  )
}
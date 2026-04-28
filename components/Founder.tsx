import { FaHeart } from "react-icons/fa"
import { Button } from "./ui/Button"
import Image from "next/image"

export const Founder=()=>{
    return(
        <>
        <section className="px-6 py-6 md:px-0 md:py-20 bg-white flex flex-col md:flex-row ">
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
                <p className="body-text text-base text-[#FFA500] font-semibold mb-2">
                  COMPANY OWNER
                </p>
        
                <h3 className="heading text-3xl md:text-4xl lg:text-6xl text-[#005248] font-bold ">
                  Meet the Founder
                  <span className="text-[#FFA500]">.</span>
                </h3>
                <p className="body-text text-base mypara mb-4 mt-4 max-w-2xl">
                  <b>Gulshan Thakur</b> is the founder of Rood Mates. Unke paas entrepreneurial mindset hai aur meaningful services create karne ka passion hai. Unhone is venture ko isliye start kiya kyunki busy students aur working professionals ke liye fresh, affordable aur reliable daily meals milna aksar mushkil hota hai.
                </p>
                <p className="body-text text-base mypara mb-4 mt-4 max-w-2xl">
                 Gulshan ka maanna hai ki food business me sirf taste hi nahi, balki consistency, hygiene aur customer satisfaction bhi equally important hote hain.
                </p>
                
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
        </>
    )
}
import Image from "next/image";

export default function MenuImage() {
  return (
    <section className="py-20 px-6 bg-[#f9f5f0]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left — Text */}
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">
            What We Serve
          </p>
          <h2 className=" heading text-4xl md:text-5xl font-bold text-[#1a3a2a] mb-6 leading-tight">
            Fresh & Healthy <br />
            Meals Every Day<span className="text-amber-600">.</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Our weekly menu is carefully crafted to bring you the taste of home — 
            fresh ingredients, hygienic preparation, and balanced nutrition in every meal.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            From dal chawal to seasonal sabzi, every dish is made with love 
            just like your mom would make it — so you never miss home.
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-3">
            {[
              '🥗 Fresh ingredients sourced daily',
              '🍱 Hygienically packed and delivered',
              '🏠 Home-cooked taste guaranteed',
              '📅 Menu updated every week',
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/updated-menu.jpeg"
              alt="Weekly Menu"
              width={520}
              height={600}
              className="object-cover w-full h-full"
            />
            {/* Badge */}
            {/* <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              📅 Updated Weekly
            </div> */}
          </div>
        </div>

      </div>
    </section>
  )
}
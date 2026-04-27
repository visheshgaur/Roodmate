import React from 'react';
import { TESTIMONIALS } from './TestimonialsData';
import { FcGoogle } from "react-icons/fc";

const TestimonialsSection = () => {
  return (
    <section className="bg-[#94A82F] py-16 px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className=" body-text text-white uppercase tracking-[0.2em] text-xs font-bold mb-2">
            TESTIMONIALS
          </p>
          <h2 className="heading text-3xl md:text-4xl lg:text-6xl text-white font-bold">
            What Our Customer Say<span className="text-[#FFD700]">.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 rounded-[30px] shadow-lg flex flex-col justify-between transition-transform hover:scale-[1.02]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="body-text font-semibold text-xl text-gray-900">{item.name}</h3>
                    <p className="body-text text-[#94A82F] text-xs font-bold uppercase tracking-wider">
                      {item.type}
                    </p>
                  </div>
                  {/* Verified Icon Placeholder */}
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold pt-5"><FcGoogle /></span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex text-[#FFD700] mb-4 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < item.rating ? '★' : '☆'}</span>
                  ))}
                </div>

                <p className="body-text text-gray-700 leading-relaxed italic text-sm">
                  "{item.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import { Aboutus } from "@/components/home/Aboutus";
import { Faqs } from "@/components/home/Faqs";
import { Foodquality } from "@/components/home/Foodquality";
import { Hero } from "@/components/home/Hero";
import MenuImage from "@/components/home/MenuImage";
import { MenuSection } from "@/components/home/MenuSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PlansSection from "@/components/PlansSection";

import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
    
      <Hero/>
      {/* <MenuSection/> */}
      <MenuImage/>
      <Aboutus/>
      <PlansSection/>
      <Foodquality/>
      <TestimonialsSection/>
      <Faqs/>
      <Footer/>
      
      
    </main>
  )
}
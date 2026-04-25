import { Aboutus } from "@/components/home/Aboutus";
import { Faqs } from "@/components/home/Faqs";
import { Hero } from "@/components/home/Hero";
import { MenuSection } from "@/components/home/MenuSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
    
      <Hero/>
      <MenuSection/>
      <Aboutus/>
      <Faqs/>
      <Footer/>
      
      
    </main>
  )
}
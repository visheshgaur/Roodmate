import { Founder } from "@/components/Founder";
import { Aboutus } from "@/components/home/Aboutus";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { OurMission } from "@/components/OurMission";
import Footer from "@/components/shared/Footer";


import { InnerBanner } from "@/components/shared/InnerBanner";

export default function AboutPage() {
  return (
   <>
   <InnerBanner heading="About"/>
   <Aboutus/>
   <OurMission/>
   <Founder/>
   <TestimonialsSection/>
   <Footer/>
   </>
  );
}
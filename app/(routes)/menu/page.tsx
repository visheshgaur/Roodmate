import FoodMenu from "@/components/FoodMenu";
import Footer from "@/components/shared/Footer";
import { InnerBanner } from "@/components/shared/InnerBanner";

export default function AboutPage() {
  return (
    
     <>
      <InnerBanner heading="Menu"/>
      <FoodMenu/>
      <Footer/>
     </>
    
  );
}
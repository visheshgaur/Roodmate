import PlansSection from "@/components/PlansSection";
import Footer from "@/components/shared/Footer";
import { InnerBanner } from "@/components/shared/InnerBanner";

export default function subscriptionPlan(){
    return(
        <>
    <InnerBanner heading="Subscription Plan" />
    <PlansSection/>
    <Footer/>
        </>
    )
}
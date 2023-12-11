

import Banner from "./Banner/Banner";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import SliderComponent from "./SliderComponent";
import BenefitsSection from "./TopDeliveryManSec/BenefitsSection";
import FeatureSection from "./TopDeliveryManSec/FeatureSection";
import TopDeliveryMans from "./TopDeliveryManSec/TopDeliveryMans";

const Home = () => {
    return (
        <div>
  
        <Banner></Banner>
         <FeaturesSection></FeaturesSection>
         <TopDeliveryMans></TopDeliveryMans>
       
       <BenefitsSection></BenefitsSection>
       <FeatureSection></FeatureSection>
       
       <SliderComponent></SliderComponent>
        </div>
    );
};

export default Home;
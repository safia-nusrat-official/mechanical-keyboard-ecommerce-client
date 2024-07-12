import "./home.css";
import HeroSection from "./heroSection/HeroSection";
import ServiceSection from "./serviceSection/serviceSection";
import FeaturedProductsSection from "./featuredProducts.tsx/featuredProductsSection";
import FeaturedBrandsSection from "./featuredBrands/featuredBrandsSection";
import ReviewsSection from "./reviewsSection/reviewsSection";
import WhyChooseSection from "./whyChooseSection";
import CustomizableOptionsSection from "./customizableOptionsSection";

const Home = () => {
  return (
    <main style={{ fontFamily: "Untitled Sans" }}>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <FeaturedProductsSection></FeaturedProductsSection>
      <FeaturedBrandsSection></FeaturedBrandsSection>
      <ReviewsSection></ReviewsSection>
      <WhyChooseSection></WhyChooseSection>
      <CustomizableOptionsSection></CustomizableOptionsSection>
    </main>
  );
};

export default Home;

import "./home.css";
import HeroSection from "./heroSection/HeroSection";
import ServiceSection from "./serviceSection/serviceSection";
import FeaturedProductsSection from "./featuredProducts.tsx/featuredProductsSection";
import FeaturedBrandsSection from "./featuredBrands/featuredBrands";
import ReviewsSection from "./reviewsSection/reviewsSection";

const Home = () => {
  return (
    <main style={{ fontFamily: "Untitled Sans" }}>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <FeaturedProductsSection></FeaturedProductsSection>
      <FeaturedBrandsSection></FeaturedBrandsSection>
      <ReviewsSection></ReviewsSection>
    </main>
  );
};

export default Home;

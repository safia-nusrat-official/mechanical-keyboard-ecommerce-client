import "./home.css";
import HeroSection from "./heroSection/HeroSection";
import ServiceSection from "./serviceSection/serviceSection";
import FeaturedProductsSection from "./featuredProducts.tsx/featuredProductsSection";

const Home = () => {
  return (
    <main style={{ fontFamily: "Untitled Sans" }}>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <FeaturedProductsSection></FeaturedProductsSection>
    </main>
  );
};

export default Home;

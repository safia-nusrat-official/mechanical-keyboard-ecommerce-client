import "./home.css"
import HeroSection from "./heroSection/HeroSection";
import ServiceSection from "./serviceSection/serviceSection";

const Home = () => {
  return (
    <main style={{ fontFamily: "Untitled Sans" }}>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
    </main>
  );
};

export default Home;

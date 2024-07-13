import "./featuredBrands.css";
import brands from "../../../../public/brands.json";
import { Divider } from "antd";

const FeaturedBrandsSection = () => {
  return (
    <section className="md:p-20 mt-6 p-8 flex items-center flex-col justify-center overflow-hidden">
      {/* <div className="slider">
        <div className="slide-track">
          {brands?.length &&
            brands.map((brand, index) => (
              <div key={index} className="slide flex-none bg-blue-400">
                <img
                  className="logo"
                  src={brand.logo}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div> */}

      <div className="wrapper w-[95%] overflow-hidden relative">
        <div className="flex w-screen relative logo gap-8">
          {brands?.length &&
            brands.slice(0, 5).map((brand, index) => (
              <div key={index} className="md:flex-none">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-fit h-fit"
                />
              </div>
            ))}
          {brands?.length &&
            brands.slice(0, 5).map((brand, index) => (
              <div key={index + 5} className="flex-none">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full"
                />
              </div>
            ))}
          {brands?.length &&
            brands.slice(0, 5).map((brand, index) => (
              <div key={index + 10} className="flex-none">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="wrapper w-1/2 mt-6 overflow-hidden relative">
        <div className="flex w-screen relative logo gap-8">
          {brands?.length &&
            brands.slice(6).map((brand, index) => (
              <div key={index} className="flex-none">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-fit h-fit"
                />
              </div>
            ))}
          {brands?.length &&
            brands.slice(6).map((brand, index) => (
              <div key={index + 5} className="flex-none">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full"
                />
              </div>
            ))}
          {brands?.length &&
            brands.slice(6).map((brand, index) => (
              <div key={index + 10} className="flex-none">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full"
                />
              </div>
            ))}
        </div>
      </div>

      <Divider className="bg-zinc-300 mt-8"></Divider>
    </section>
  );
};

export default FeaturedBrandsSection;

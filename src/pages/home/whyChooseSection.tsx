import whyChooseBgVid from "../../assets/videos/section-bg.mp4";
import whyChooseSectionData from "../../../public/whyChooseSectionData.json";

const whyChooseSection = () => {
  return (
    <section className="md:px-20 p-8">
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        className="section-video-bg-container h-[200px] md:h-[140px] flex justify-center items-center overflow-hidden relative"
      >
        <video
          autoPlay
          loop
          muted
          className="video-background
           w-full absolute object-cover top-0"
        >
          <source src={whyChooseBgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay top-4 relative font-[600] text-4xl md:mt-0  md:text-6xl mb-6 text-center mix-blend-screen z-[4] text-black ">
          <h2 className="md:p-8 pb-10 bg-[#fefefe]">
            Why Choose Mechanical Keyboards?
          </h2>
        </div>
      </div>

      <div className="flex mt-6 items-start md:flex-row flex-col gap-2">
        {whyChooseSectionData.slice(0, 3).map((data, index) => (
          <div className="flex relative items-center">
            <div
              className={`h-28 w-[1.5px] bg-zinc-700 ${
                index === 0 ? "hidden" : "block"
              } mx-4`}
            ></div>

            <div data-aos="fade-up" className="p-4 text-balance">
              <h5 className="font-semibold mb-2">{data.title}</h5>
              <p className="text-zinc-700">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default whyChooseSection;

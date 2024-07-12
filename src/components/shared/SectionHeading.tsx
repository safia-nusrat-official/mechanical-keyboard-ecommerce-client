const SectionHeading = ({
  text,
  mode = "light",
  hideInSm = true,
  animateFrom = undefined,
  center = false,
}: {
  text: string;
  mode?: "light" | "dark";
  hideInSm?: boolean|"both";
  animateFrom?: "left" | "right";
  center?: boolean;
}) => {
  return (
    <h2
      data-aos={`${animateFrom && `fade-${animateFrom}`}`}
      data-aos-delay="500"
      className={`font-[600] text-4xl md:mt-0  md:text-6xl mb-6  ${
        mode === "light" ? "text-[#fefefe]" : "text-custom-primary"
      } 
      ${hideInSm==="both" ? "block" : hideInSm? "md:block hidden" : "md:hidden block"}
      ${center ? "text-center" : ""}
      `}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;

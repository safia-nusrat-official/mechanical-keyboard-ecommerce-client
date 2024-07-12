const SectionHeading = ({
  text,
  mode = "light",
  hideInSm = true,
  animateFrom=undefined
}: {
  text: string;
  mode?: "light" | "dark";
  hideInSm?: boolean;
  animateFrom?:"left"|"right"
}) => {
  return (
    <h2
    data-aos={`${animateFrom && `fade-${animateFrom}`}`}
    data-aos-delay="500"
      className={`font-[600] text-4xl md:mt-0  md:text-6xl mb-6  ${
        mode === "light" ? "text-[#fefefe]":"text-custom-primary"
      } 
      ${ hideInSm ? "md:block hidden" : "md:hidden block"}
      `}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;

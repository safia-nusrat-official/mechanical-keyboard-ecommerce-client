import { useEffect, useState } from "react";

const HeroHeader = () => {
  const lines = ["Discover Premium", "Mechanical", "Keyboards"];

  const typingSpeed = 100;

  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const typeLine = (lineIndex: number, text: string, callback: any) => {
      let index = 0;
      const type = () => {
        if (index < text.length) {
          setDisplayedText((prev) => {
            const newDisplayedText = [...prev];
            newDisplayedText[lineIndex] = text.substring(0, index + 1);
            return newDisplayedText;
          });
          index++;
          setTimeout(type, typingSpeed);
        } else {
          setCurrentLineIndex(lineIndex + 1);
          callback();
        }
      };
      type();
    };

    const typeAllLines = () => {
      typeLine(0, lines[0], () => {
        setTimeout(() => {
          typeLine(1, lines[1], () => {
            setTimeout(() => {
              typeLine(2, lines[2], () => {});
            }, typingSpeed);
          });
        }, typingSpeed);
      });
    };

    typeAllLines();
  }, []);

  return (
    <h1 className="md:text-8xl text-4xl font-[600] md:font-[700] h-fit md:h-[300px]">
      <span className={currentLineIndex === 0 ? "typing-effect" : ""}>
        {displayedText[0]}
      </span>
      <br />
      <span className={currentLineIndex === 1 ? "typing-effect" : ""}>
        {displayedText[1]}
      </span>
      <br />
      <span className="typing-effect">{displayedText[2]}</span>
    </h1>
  );
};

export default HeroHeader;

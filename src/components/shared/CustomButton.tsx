import { Button } from "antd";

const CustomButton = ({ text }: { text: string }) => {
  return (
    <Button
      className={`mix-blend-screen hover:scale-150 hover:border-none text-black bg-white mt-6 font-[600]`}
      style={{ fontFamily: "Untitled Sans" }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

import Lottie from "lottie-react";
import animationData from "../assets/gif/Animation1.json"; // Import your Lottie JSON file

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={animationData} loop={true} className="w-60 h-60" />
    </div>
  );
};

export default Loader;
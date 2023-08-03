import React from "react";
import Lottier from "lottie-react";

/**
 * data: any;
 * autoPlay?: boolean;
 * loop?: boolean;
 * width?: number;
 * height?: number;
 */
const Lottie = ({
  data,
  autoPlay = true,
  loop = true,
  width = 400,
  height = 400,
}) => {
  const defaultOptions = {
    loop,
    autoplay: autoPlay,
    animationData: data,
    style: {
      width,
      height
    },
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottier {...defaultOptions} />;
};

export default Lottie;

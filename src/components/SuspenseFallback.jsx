// import LoadingSpinner from "./common/LoadingSpinner";
import Lottie from "./common/Lottie";

import loadingLottie from "../assets/lotties/animation_purple_dots_loading.json";

const SuspenseFallback = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Lottie data={loadingLottie} width={250} height={250}/>
    </div>
  );
};

export default SuspenseFallback;

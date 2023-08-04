import React from "react";
import Spinner from "./Spinner";
import { Stack } from "@mui/material";
import Lottie from "./Lottie";

import loadingLottie from "../../assets/lotties/animation_no_search.json";

const EmptyState = ({
  isLoading,
  className = "items-center justify-center",
  text = "Nothing here to see...",
}) => {
  return (
    <Stack className={className}>
      {isLoading ? (
        <Spinner size={20} color="primary" />
      ) : (
        <>
          <Stack
            className="p-2"
            sx={{
              width: "180px",
              height: "180px",
              // backgroundColor: "var(--light-text-color)",
              // border: "1px solid #eaeaea",
              borderRadius: "50%",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* <img
              src={require("../../assets/images/woman.svg").default}
              alt="no-item"
            /> */}
            <Lottie data={loadingLottie} width={250} height={250} />
          </Stack>

          <span
            className="my-4 text-center text-2xl"
            style={{
              maxWidth: "300px",
              color: "var(--light-text-color)",
            }}
          >
            {text}
          </span>
        </>
      )}
    </Stack>
  );
};

export default EmptyState;

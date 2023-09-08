import React from "react";
import HomeApp from "./HomeApp";

const FolderApp = ({ icon, ...others }) => {
  return (
    <HomeApp
      icon={
        <img
          src={require("../assets/images/Folder-icon.png")}
          alt="#"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      }
      {...others}
    />
  );
};

export default FolderApp;

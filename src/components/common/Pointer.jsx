import React, { useEffect, useState } from "react";
import "./pointer.css";

function PointerBox (props) {
  const [text] = useState("Try my new dark/light mode");
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const timeout = Math.round(Math.random() * 30 + 8);

    const hidePointer = () => {
      setVisibility(false);
    };

    const showPointer = () => {
      setVisibility(true);
      window.setTimeout(hidePointer, 10000);
    };

    window.setTimeout(showPointer, timeout * 1000);
  }, []);

  return (
    <div className={`pointer-box ${visibility ? "" : "off"}`}>
      <div className="rows pointer-box-content">{text}</div>
    </div>
  );
}

export default PointerBox;

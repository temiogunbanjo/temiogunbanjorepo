import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const LazyVideo = ({ src: VideoSrc, ...props }) => {
  const [src, setSrc] = useState(null);
  const videoRef = useRef(null);

  const callback = useCallback((entries) => {
    // console.log(entries);
    const [entry] = entries;
    if (entry.isIntersecting) {
      setSrc(VideoSrc);
    }
  }, [VideoSrc]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    });

    // console.log(videoRef);
    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return (
    <ReactPlayer
      ref={videoRef}
      url={src}
      {...props}
    />
  );
};

export default LazyVideo;

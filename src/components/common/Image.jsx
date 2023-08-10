import React from "react";

export default function Image({
  src: ImageSrc,
  root = null,
  rootMargin = "0px",
  threshold = 0.01,
  alt = "",
  ...props
}) {
  const [src, setSrc] = React.useState(null);
  const imageRef = React.useRef(null);

  const callback = React.useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setSrc(ImageSrc);
      }
    },
    [ImageSrc]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [callback, root, rootMargin, threshold]);

  return <img ref={imageRef} src={src} alt={alt} {...props} />;
}

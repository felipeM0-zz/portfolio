import { useState, useEffect } from "react";

export const useWidth = (size: number) => {
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize(!Boolean(window.innerWidth <= size));
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return windowSize;
};

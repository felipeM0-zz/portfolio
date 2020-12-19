import { useState, useEffect } from "react";

export const useWidth = () => {
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSize(!Boolean(window.innerWidth <= 768));
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

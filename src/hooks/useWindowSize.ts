"use client";

import { useEffect, useState } from "react";

export interface WindowSize {
  width: undefined | Number;
  height: undefined | Number;
}
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = function () {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with init ial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

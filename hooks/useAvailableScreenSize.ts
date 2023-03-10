import { useState } from "react";

import { useEventListener, useIsomorphicLayoutEffect } from "usehooks-ts";

interface WindowSize {
  width: number;

  height: number;
}

function useAvailableScreenSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,

    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.screen.availWidth,

      height: window.screen.availHeight,
    });
  };

  useEventListener("resize", handleSize);

  // Set size at the first client-side load

  useIsomorphicLayoutEffect(() => {
    handleSize();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}

export default useAvailableScreenSize;

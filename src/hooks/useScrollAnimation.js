import { useEffect } from "react";

function useScrollAnimation(containerRef) {
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const rect =
        container.getBoundingClientRect();

      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      ) {
        container.classList.add(
          "rotate-animate"
        );
      } else {
        container.classList.remove(
          "rotate-animate"
        );
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [containerRef]);
}

export default useScrollAnimation;
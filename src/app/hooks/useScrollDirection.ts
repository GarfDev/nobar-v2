import { useState, useEffect } from "react";

function useScrollDirection(fn: (direction: string) => void) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string>(null!);

  useEffect(() => {
    fn(scrollDirection);
  }, [fn, lastScrollY, scrollDirection]);

  useEffect(() => {
    // function to run on scroll
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [fn, lastScrollY, scrollDirection]); // run when scroll direction changes

  return scrollDirection;
}

export default useScrollDirection;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This scrolls the window to the very top (x=0, y=0) 
    // whenever the URL pathname changes.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Searchbar from "../components/SearchBar";
import Topbar from "../components/Topbar";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navbarRef = useRef(null);
    const searchbarRef = useRef(null);
    const topbarRef = useRef(null);

    useEffect(() => {
      const scrollAfterNavbar = () => {
          if (pathname === "/") {
              // If on homepage, scroll to top directly
              window.scrollTo({ top: 0, behavior: "smooth" });
          } else if (navbarRef.current && searchbarRef.current && topbarRef.current) {
              // If on other pages, scroll after Topbar, Navbar & Searchbar
              const navbarHeight = navbarRef.current.offsetHeight;
              const searchbarHeight = searchbarRef.current.offsetHeight;
              const topbarHeight = topbarRef.current.offsetHeight;
              const totalHeight = navbarHeight + searchbarHeight + topbarHeight;

              window.scrollTo({ top: totalHeight, behavior: "smooth" });
          } else {
              window.scrollTo({ top: 0, behavior: "smooth" }); // Fallback
          }
      };

      scrollAfterNavbar();
  }, [pathname]);

    return (
        <>
            {/* Attach refs to components */}
            <div ref={topbarRef}>
                <Topbar />
            </div>
            <div ref={searchbarRef}>
                <Searchbar />
            </div>
            <div ref={navbarRef}>
                <Navbar />
            </div>
        </>
    );
};

export default ScrollToTop;

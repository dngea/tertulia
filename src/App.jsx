import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu";

export function App() {
  const [currentPageLeft, setCurrentPageLeft] = useState("About");
  const [currentPageRight, setCurrentPageRight] = useState("Events");
  const [uniquePage, setUniquePage] = useState("About");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000); // condition returns true or false (e.g isMobile? -> False)

  useEffect(() => {
    const updateWidth = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNavClick = (page, side) => {
    if (isMobile) {
      setUniquePage(page);
      if (["About", "Gallery"].includes(page)) {
        setCurrentPageLeft(page);
      }
    } else {
      side === "left"
        ? (setCurrentPageLeft(page), setUniquePage(page))
        : setCurrentPageRight(page);
    }
  };

  return (
    <div
      className={`box-border grid ${isMobile ? "grid-cols-1" : "grid-cols-[5fr_3fr]"} grid-rows-[110px_auto_180px]`}
    >
      <Nav
        handleNavClick={handleNavClick}
        currentPageLeft={currentPageLeft}
        currentPageRight={currentPageRight}
        uniquePage={uniquePage}
        isMobile={isMobile}
      />

      {isMobile ? (
        <>
          {uniquePage === "About" && <About />}
          {uniquePage === "Events" && <Events />}
          {uniquePage === "Gallery" && <Gallery />}
          {uniquePage === "Menu" && <Menu />}
        </>
      ) : (
        <>
          {currentPageLeft === "About" && <About />}
          {currentPageLeft === "Gallery" && <Gallery />}

          {currentPageRight === "Menu" && <Menu />}
          {currentPageRight === "Events" && <Events />}
        </>
      )}

      <Footer />
    </div>
  );
}

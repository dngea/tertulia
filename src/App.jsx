import { useState } from "react";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Menu } from "./components/Menu";

export function App() {
  const [currentPageLeft, setCurrentPageLeft] = useState("About");
  const [currentPageRight, setCurrentPageRight] = useState("Events");

  const handleNavClick = (page, side) => {
    side === "left" ? setCurrentPageLeft(page) : setCurrentPageRight(page);
  };

  return (
    <div className="box-border grid grid-cols-[5fr_3fr] grid-rows-[100px_auto_100px]">
      <Nav
        handleNavClick={handleNavClick}
        currentPageLeft={currentPageLeft}
        currentPageRight={currentPageRight}
      />

      {currentPageLeft === "About" && <About />}
      {currentPageLeft === "Gallery" && <Gallery />}

      {currentPageRight === "Menu" && <Menu />}
      {currentPageRight === "Events" && <Events />}

      <Footer />
    </div>
  );
}

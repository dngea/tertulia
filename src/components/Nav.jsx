import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav({
  handleNavClick,
  currentPageLeft,
  currentPageRight,
  uniquePage,
  isMobile,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-light border-dark relative col-span-2 flex flex-row items-end justify-between border-b-3 px-12 py-2">
      {isMobile ? (
        <>
          <h1 className="font-title text-6xl font-medium">La Tertulia</h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          >
            <Menu size={32} />
          </button>

          {isMenuOpen && (
            <nav className="bg-light fixed top-[110px] left-0 z-10 flex h-full w-full items-center justify-center">
              <ul className="flex translate-y-[-60px] flex-col justify-center space-y-12">
                {["About us", "Events", "Menu", "Gallery"].map(
                  (pageName, i) => (
                    <li
                      className={`hover:text-light hover:bg-primary w-fit cursor-pointer text-2xl text-[20px] ${uniquePage === pageName ? "border-primary text-primary border-b-2" : "text-dark"}`}
                      key={i}
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleNavClick(pageName, "left");
                      }}
                    >
                      {pageName}
                    </li>
                  ),
                )}
              </ul>
            </nav>
          )}
        </>
      ) : (
        <>
          <ul className="text-dark text-1xl font-title font-regular flex gap-4">
            {["About us", "Gallery"].map((pageName, i) => (
              <li
                key={i}
                className={`hover:text-light hover:bg-primary cursor-pointer text-[20px] ${currentPageLeft === pageName ? "border-primary text-primary border-b-2" : "text-dark"}`}
                onClick={() => handleNavClick(pageName, "left")}
              >
                {pageName}
              </li>
            ))}
          </ul>

          <h1 className="font-title text-6xl font-medium">La Tertulia</h1>

          <ul className="text-dark text-1xl font-title font-regular flex gap-4">
            {["Menu", "Events"].map((pageName, i) => (
              <li
                key={i}
                className={`hover:text-light hover:bg-primary cursor-pointer text-[20px] ${currentPageRight === pageName ? "border-primary text-primary border-b-2" : "text-dark"}`}
                onClick={() => handleNavClick(pageName, "right")}
              >
                {pageName}
              </li>
            ))}
          </ul>
        </>
      )}
    </header>
  );
}

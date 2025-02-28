export function Nav({ handleNavClick, currentPageLeft, currentPageRight }) {
  return (
    <header className="bg-light border-dark col-span-2 flex flex-row items-end justify-between border-b-3 px-5 py-2">
      <ul className="text-dark text-1xl font-title font-regular flex gap-4">
        <li
          className={`hover:text-light hover:bg-primary cursor-pointer text-[20px] ${currentPageLeft === "About" ? "border-primary text-primary border-b-2" : "text-dark"}`}
          onClick={() => handleNavClick("About", "left")}
        >
          About us
        </li>
        <li
          className={`hover:text-light hover:bg-primary cursor-pointer text-[20px] ${currentPageLeft === "Gallery" ? "text-primary border-primary border-b-2" : "text-dark"}`}
          onClick={() => handleNavClick("Gallery", "left")}
        >
          Gallery
        </li>
      </ul>

      <h1 className="font-title text-6xl font-medium">La Tertulia</h1>

      <ul className="text-dark text-1xl font-title font-regular flex gap-4">
        <li
          className={`hover:text-light hover:bg-primary cursor-pointer text-[20px] ${currentPageRight === "Menu" ? "border-primary text-primary border-b-2" : "text-dark"}`}
          onClick={() => handleNavClick("Menu", "right")}
        >
          Menu
        </li>
        <li
          className={`hover:text-light hover:bg-primary cursor-pointer text-[20px] ${currentPageRight === "Events" ? "border-primary text-primary border-b-2" : "text-dark"}`}
          onClick={() => handleNavClick("Events", "right")}
        >
          Events
        </li>
      </ul>
    </header>
  );
}

import { Mail, Fb, Ig } from "../assets/svg/Icons";

export function Footer() {
  return (
    <footer className="bg-light col-span-2 flex items-center justify-center px-8">
      <div className="font-paragraph border-dark flex w-full items-center justify-between border-2 p-4">
        <div>
          <h5 className="font-semibold">La Tertulia</h5>
          <small>C/ Pintor López Mezquita, 3</small>
          <small>18002, Granada</small>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-row gap-4">
            <a href="#">
              <Mail />
            </a>
            <a
              href="https://www.facebook.com/latertuliagranada/?locale=es_LA"
              target="_blank"
            >
              <Fb />
            </a>
            <a href="https://www.instagram.com/tertuliagranada/?hl=es">
              <Ig />
            </a>
          </div>

          <small className="text-[#c7c0b1]">@2025 Designed by Daniel Gea</small>
        </div>

        <a href="#">Login</a>
      </div>
    </footer>
  );
}

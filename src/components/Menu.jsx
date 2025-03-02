import Header from "./Header";
import menuList from "../data/menuList.json";
import MainContent from "./MainContent";

const DisplayMenu = () => (
  <section className="space-y-8 px-5">
    {menuList.menu.categories.map((category, index) => (
      <div key={index}>
        <h3 className="text-primary font-title font-regular mb-2 text-2xl">
          {category.name}
        </h3>
        <ul className="space-y-4">
          {category.products.map((product, i) => (
            <li
              key={i}
              className="flex flex-row justify-between border-b-1 border-b-[#8f8f8f]"
            >
              <p>{product.name}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export function Menu() {
  return (
    <aside className="border-dark border-l-2">
      <MainContent>
        <Header title="Menu" hierarchy="h1" color="dark" />
        <DisplayMenu />
      </MainContent>
    </aside>
  );
}

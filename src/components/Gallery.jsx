import Header from "./Header";
import MainContent from "./MainContent";

const images = 5;

const Columns = ({ children }) => (
  <section className="grid grid-cols-2 gap-8 px-5">{children}</section>
);

const DisplayGallery = () => (
  <section className="columns-2 space-y-8">
    {Array.from({ length: images }, (_, index) => {
      return (
        <img
          key={index}
          src={`/img/${index + 1}.jpg`}
          alt="Image from La Tertulia"
          className="w-full object-cover"
        />
      );
    })}
  </section>
);

export function Gallery() {
  return (
    <MainContent>
      <Header title="Gallery" hierarchy="h1" />
      <section>
        <DisplayGallery />
      </section>
    </MainContent>
  );
}

import Header from "./Header";

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
    <main className="bg-light font-paragraph dn-scrollbar-hidden h-screen max-h-[calc(100vh-80px)] space-y-6 overflow-auto py-12">
      <Header title="Gallery" hierarchy="h1" />
      <section className="p-5">
        <DisplayGallery />
      </section>
    </main>
  );
}

import React, { children } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const Schedule = React.memo(({ days, hours }) => (
  <div className="grid grid-cols-2 gap-6">
    <ul className="flex flex-col items-end text-right" aria-label="days">
      {days.map((day, index) => (
        <li key={index}>{day}</li>
      ))}
    </ul>

    <ul aria-label="hours">
      {hours.map((hour, index) => (
        <li key={index}>{hour}</li>
      ))}
    </ul>
  </div>
));

const Columns = ({ children }) => (
  <section className="grid grid-cols-2 gap-8 space-y-4">{children}</section>
);

const HistoryText = () => (
  <article className="space-y-4">
    <p>
      El 19 de abril de 1980, España era un país muy distinto del que es hoy.
      Las calles no estaban vacías, ni los bares cerrados. Hasta cinco años
      antes de esa fecha, nuestro país estaba en manos de un autócrata que murió
      en la cama...
    </p>
    <p>
      Aquel 19 de abril de 1980 abrió sus puertas La Tertulia, la primera 'red
      social' de las Artes, con mayúsculas, en esta ciudad. Rébora recuerda ese
      día con una mezcla de nostalgia y alegría...
    </p>
    <p>
      El fundador de La Tertulia conocía algo de la vida cultural española tras
      su paso por Madrid, y allí observó que la inmensa mayoría de las personas
      que la integraban había conspirado contra Franco, pero la democracia les
      había disgregado...
    </p>
  </article>
);

export function About() {
  return (
    <MainContent>
      <Header title="About Us" hierarchy="h1" />

      <Columns>
        <div className="space-y-8">
          <article className="space-y-2">
            <p>
              La Tertulia es un punto de referencia para la cultura de la ciudad
              de Granada. Inaugurado en 1980, ha sido un lugar de encuentro de
              poetas, músicos, artistas e intelectuales de los últimos 35 años.
            </p>
            <p>
              Ofrece actividades culturales casi a diario, que van desde
              conciertos a recitales de poesía, pasando por clases de baile de
              tango, presentaciones de libros, teatro, etc.
            </p>
          </article>

          <article className="space-y-4">
            <Header title="Schedule" hierarchy="h3" />
            <Schedule
              days={[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ]}
              hours={[
                "Closed",
                "21:00 - 02:00",
                "20:00 - 02:00",
                "20:30 - 03:00",
                "19:00 - 03:00",
                "16:00 - 03:00",
                "Closed",
              ]}
            />
          </article>

          <article className="space-y-4">
            <Header title="Location" hierarchy="h3" />
            <address>
              La Tertulia, C. Pintor López Mezquita, 3, Ronda, 18002 Granada,
              España
            </address>
          </article>
        </div>

        <figure>
          <img
            className="h-full w-full object-cover grayscale-100"
            src="/img/3.jpg"
            alt="Interior de La Tertulia en Granada"
          />
        </figure>
      </Columns>

      <figure className="py-8">
        <img
          className="h-full w-full object-cover p-0"
          src="/img/5.jpg"
          alt=""
        />
      </figure>

      <Header title="History" hierarchy="h2" />

      <Columns>
        <HistoryText />
        <figure>
          <img
            className="h-full w-full object-cover grayscale-100"
            src="/img/2.jpg"
            alt="People sitting at tables inside the bar"
          />
        </figure>
      </Columns>
    </MainContent>
  );
}

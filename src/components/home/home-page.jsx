import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <div className="home-body">
      <h1>Cities with Open Events</h1>
      {data.map((ev) => {
        return (
          <Link
            key={ev.id}
            href={`./events/${ev.id}`}
            className="home-city-events"
          >
            <div className="image-container">
              <Image src={ev.image} alt="City Image" height={300} width={100} />
            </div>
            <div className="content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

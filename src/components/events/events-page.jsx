import React from "react";
import Image from "next/image";
import Link from "next/link";

export const EventsPage = ({ data }) => {
  return (
    <div className="events-page">
      <h1>Events Page</h1>
      <div className="events-cards-container">
        {data.map((ev) => {
          return (
            <Link key={ev.id} href={`./events/${ev.id}`} className="cityEvents">
              <Image src={ev.image} alt="City Image" width={200} height={200} />
              <h2>{ev.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

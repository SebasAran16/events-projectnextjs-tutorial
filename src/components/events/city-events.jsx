import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CityEvents = ({ pageName, data }) => {
  return (
    <div className="city-events-main-container">
      <h1>Events in {pageName[0].toUpperCase() + pageName.substring(1)}</h1>
      <div className="city-events-container">
        {data.map((ev) => {
          return (
            <Link href={`/events/${ev.city}/${ev.id}`} className="cityEvents">
              <Image src={ev.image} width="200" height="300" />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
              <p>
                People Attending:{" "}
                {ev.emails_registered.length > 0
                  ? ev.emails_registered.length
                  : "Be the first one registering!"}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

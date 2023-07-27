import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CityEvents = ({ data, cityName }) => {
  // EventsOfASpecificCity
  return (
    <>
    <div className="city-events">
      <h1>
        Events&nbsp; In &nbsp;
        {cityName === "london"
          ? "London"
          : cityName === "san-francisco"
          ? "San Francisco"
          : cityName === "barcelona"
          ? "Barcelona"
          : cityName}
      </h1>
      <div className="main-div">
      {data.map((ev) => (
        <div key={ev.id}>
          <Link href={`/events/${ev.city}/${ev.id}`} className="card-link">
            <Image
              alt={ev.title}
              src={ev.image}
              width={400}
              height={350}
              priority
              />
            <div className="title-desc">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

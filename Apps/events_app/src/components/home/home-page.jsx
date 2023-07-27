import Image from "next/image";
import Link from "next/link";
import About from "@/pages/about-us";
const homePage = ({ data }) => {
  return (
    <main className="mainContent">
      {data.map((ev) => (
        <div key={ev.id} className="main-div">
          <Link href={`/events/${ev.id}`} className={`card-link ${ev.id}`}>
            <div className="cityImg">
              <Image
                src={ev.image}
                alt={ev.title}
                width={450}
                height={400}
                priority
              />
            </div>
            <div className="title-desc">
              <h2>{ev.title}</h2>

              <p>{ev.description}</p>
            </div>
          </Link>
        </div>
      ))}
      <About/>
    </main>
  );
};

export default homePage;

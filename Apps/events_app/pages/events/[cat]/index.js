import { CityEvents } from "@/src/components/events/cityEvents";

const EventsOfASpecificCity = ({data , cityName}) => {
  return (
    <>
     <CityEvents data={data} cityName={cityName} />
    </>
  );
};

export default EventsOfASpecificCity;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths:allPaths,
    fallback:false,
  };
}

export async function getStaticProps(context){
  const id=context?.params.cat;
  const {allEvents}=await import ("/data/data.json")
  
const data=allEvents.filter(ev=>ev.city===id)


  return{
    props:{data ,cityName:id }
  }
}
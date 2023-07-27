
import { TotalEvents } from "@/src/components/events/totalEvents";
import React from "react";

const EventsOfAllCities = ({data}) => {
  return (
    <>
   <TotalEvents data={data}  />
    </>
  );
};

export default EventsOfAllCities;

export const getStaticProps=async()=>{
  const {events_categories}=await import ("/data/data.json")
return{
  props:{
    data:events_categories
  }
}  
}
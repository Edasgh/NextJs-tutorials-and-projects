import { EachEvent } from '@/src/components/events/eachEvent';


const SingleEvent = ({data}) => {
  return (
   <>
   <EachEvent data={data}  />
   </>
  )
}

export default SingleEvent;

export const getStaticPaths=async()=>{
  const data = await import('/data/data.json');
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        eventId: path.id,
      },
    };
  })
  return{
    paths:allPaths,
    fallback:false
  }
}

export const getStaticProps=async(context)=>{
  const id=context.params.eventId
  const {allEvents}=await import ("/data/data.json")
  const eventData=allEvents.filter(ev=>(
    id ===ev.id
  ))
  return{
    props:{data:eventData}
  }
}
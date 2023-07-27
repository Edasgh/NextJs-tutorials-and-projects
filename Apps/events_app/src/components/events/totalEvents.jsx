import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const TotalEvents = ({data}) => {
  //EventsOfAllCities 
  return (
    <div className='total-events'>
      <h1>Events in Your City</h1>
      <div className="main-div">
       {data.map((ev)=>(
         <div key={ev.id}  className="main-div">
          <Link href={`/events/${ev.id}`} className={`card-link ${ev.id}`}>
            <Image alt={ev.title} src={ev.image} width={400} height={350} priority title={`Events in ${ev.id}`}/>
            <h2>{ev.title}</h2>
          </Link>
        </div>
       ))}
       </div>
    </div>
  )
}



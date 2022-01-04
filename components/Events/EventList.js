import data from "../data/events"
import Link from "next/link"

import CardsFEventCard from "https://framer.com/m/cards-F-Event-Card-6iYs.js@i2VAMlyKETM6A17ZF8fK"

export function EventList(){
    return(
        <>
        {data.map( (event, index)=> (
        <Link href={`${event.link}`} key={index}>
            <a>
        <CardsFEventCard 
        image={`/images/events/${event.image}`}
        date={event.date}
        headline={event.headline}
        location={event.location}
        label={event.label}
        imageVisible={event.imageVisible}
        
        style={{
            width: "100%"
        }}/>
        </a>
        </Link>
        ))}
        

        </>
    )
}
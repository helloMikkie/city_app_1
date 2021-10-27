import data from "./data/events"
import Link from "next/link"

import _EventItem from "https://framer.com/m/Event-Item-6XuV.js@w7Jz31HgWqCuqvdnLGvo"

export function EventList(){
    return(
        <>
        {data.map( event => (
        <Link href={`/${event.link}`}>
            <a>
        <_EventItem 
        image={`/images/events/${event.image}`}
        date={event.date}
        headline={event.headline}
        location={event.location}
        label={event.label ? event.label : null}
        imageVisible={event.imageVisible}
        key={event.id}
        style={{
            width: "100%"
        }}/>
        </a>
        </Link>
        ))}
        

        </>
    )
}
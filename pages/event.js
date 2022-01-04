import Head from "next/head"
import Image from "next/image"
import {FabEvent, FABEvent} from "../components/Navigation/FABEvent"
import Layout_Event from "../components/Layouts/Layout_Events"

import EventText from "../components/Events/EventText"


export default function Events() {
    return (
        <>
            <Head>
                <title>Event</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Layout_Event link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Projects="/projects"  link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                
        
                <Image src="/images/placeholder.jpg"  
                width={2000} height={800}
                 objectFit="cover" />
            <EventText />
            </Layout_Event>
               
            
            
        </>
    )
}

import Head from "next/head"
import Layout_Events from "../components/Layouts/Layout_Events"
import {EventList} from "../components/Events/EventList"


export default function Events() {
    return (
        <>
            <Head>
                <title>Programm</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

         <Layout_Events link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Projects="/projects"  link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                
                <EventList />

            </Layout_Events>
            
        </>
    )
}

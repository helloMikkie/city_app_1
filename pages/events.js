import Head from "next/head"
import { Container } from "../components/Container"


import {EventList} from "../components/EventList"
import {Header} from "../components/Header"
import {TabbarMain} from "../components/Tabbar_Main"

export default function Events() {
    return (
        <>
            <Head>
                <title>Events</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

         
                <Header title="Events"  />
                <Container>
                    <EventList />
                </Container>
                <TabbarMain  />
            
        </>
    )
}

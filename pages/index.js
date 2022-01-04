import Head from "next/head"
import Link from "next/link"
import { Container } from "../components/Container"
import _SplashScreen from "https://framer.com/m/Splash-Screen-VILD.js@fNaKBHGBHKyGTPbKjtkW"

import {EventList} from "../components/Events/EventList"


export default function Home() {
    return (
        <>
            <Head>
                <title>IBA City App</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            
                <Link href="/projects">
                    <_SplashScreen 
                    style={{width: "100%", height: "100%"}} />
                </Link>
               
           
        </>
    )
}

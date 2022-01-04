import Layout_Service from "../components/Layouts/Layout_Service"
import NavF_Item from "https://framer.com/m/nav-F-Item-WANh.js@rVAb5ntuNBKzyX2teneE"

import Link from "next/link"


export default function Service() {
    return (
        <Layout_Service link_IBA="/iba" link_Settings="/settings"
        link_Projects="/projects"  link_Exhibition="/exhibition" link_Favorits="/favorits" link_Events="/events" link_Tours="/tours">
            <Link href={"/ubernachten"}>
                <a>
                    <NavF_Item 
                    title="Übernachten" 
                    ikon="/images/icons/external.svg" />
                </a>
            </Link>

            <Link href={"/essen-trinken"}>
            <a>
                <NavF_Item 
                title="Essen und Trinken" 
                ikon="/images/icons/restaurant.svg" />
            </a>
            </Link>
            <NavF_Item 
            title="Anreise" 
            ikon="/images/icons/briefcase.svg" />
            <NavF_Item 
            title="Fahrradverleih" 
            ikon="/images/icons/bicycle.svg" />
            <NavF_Item 
            title="Taxi- und Shuttleservice" 
            ikon="/images/icons/bus.svg" />
        </Layout_Service>
    )
}


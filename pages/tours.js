import Layout_Tours from "../components/Layouts/Layout_Tours"
import Link from "next/link"
import SlidesFTourSlide from "https://framer.com/m/slides-F-Tour-Slide-FhSx.js@uSicVdX6q4ndQCF2JMCS"



export default function Tours(){
    return(
        <>
        <Layout_Tours
        link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Projects="/projects"  link_Exhibition="/exhibition" link_Favorits="/favorits" link_Events="/events">

            <Link href="/tour-info">
                <SlidesFTourSlide style={{width: "100%", height: "100%"}}/>
            </Link>

        </Layout_Tours>
        </>
    )
}
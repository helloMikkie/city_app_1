import Head from "next/head"
import {ProjectCardList} from "../components/Projects/ProjectCardList"
import Layout_Projects from "../components/Layouts/Layout_Projects"

export default function Projects() {
    return (
        < >
            <Head>
                <title>Projects</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>
                <Layout_Projects link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                <ProjectCardList />
                </Layout_Projects>
                
                
            
        </>
    )
}

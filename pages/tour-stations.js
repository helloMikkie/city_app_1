import Head from "next/head"
import Image from "next/image"
import { FAB_Tours } from "../components/Navigation/FAB_Tours"
import Layout_Tour from "../components/Layouts/Layout_Tour"
import { ProjectCardList } from "../components/Projects/ProjectCardList"

export default function TourInfo() {
    return (
        <>
            <Head>
                <title>Tour</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            
            <Layout_Tour link_Back="javascript:history.back()" link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Projects="/projects" link_Tours="/tours">
                
            
            <ProjectCardList />

                <FAB_Tours 
                stationen="active"  
                link_Info="/tour-info"
                link_Karte="/tour-karte"
                />
                
                </Layout_Tour>
        </>
    )
}

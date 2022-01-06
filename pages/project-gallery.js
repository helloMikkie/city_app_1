import Head from "next/head"
import { FAB_Projects } from "../components/Navigation/FAB_Projects"
import Layout_Project from "../components/Layouts/Layout_Project"
import ProjectImage from "https://framer.com/m/Project-Image-x7p9.js@d5chgvritMseiafROzft"

export default function Events() {
    return (
        <>
            <Head>
                <title>Project</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            
            <Layout_Project link_Back="javascript:history.back()" link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                
            <div>
                <ProjectImage style={ImageStyle}></ProjectImage> 
                </div>
                <FAB_Projects ansichten="active" 
                    link_Info="/project-info"
                    link_Karte="/project-karte"
                    link_Video="/project-video"
                />
                
                </Layout_Project>
        </>
    )
}

const ImageStyle={
    width: "100%",
    height: "100%"
}
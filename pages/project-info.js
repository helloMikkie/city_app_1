import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Container } from "../components/Container"
import {Header} from "../components/Navigation/Header"
import  ProjectInfo from "../components/Projects/ProjectInfo"
import { TabbarMain } from "../components/Navigation/Tabbar_Main"
import { FAB_Projects } from "../components/Navigation/FAB_Projects"
import Layout_Project from "../components/Layouts/Layout_Project"
import Text11ProjectTextC from "https://framer.com/m/text-1-1-Project-Text-C-eVC2.js@iMItC2QhNJvA8sQGouN4"

export default function Events() {
    return (
        <>
            <Head>
                <title>Project</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            
            <Layout_Project link_Back="javascript:history.back()" link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                
                <Image src="/images/projects/gadamer.jpg"  
                width={2000} height={800}
                objectFit="cover" ></Image>

                <ProjectInfo title="B3 Gadamerplatz" number="15"/>

{/* Text Content */}
<Text11ProjectTextC style={ContentStyle}></Text11ProjectTextC>

                <FAB_Projects 
                info="active"  
                link_Gallery="/project-gallery"
                link_Karte="/project-karte"
                link_Video="/project-video"
                />
                
                </Layout_Project>
        </>
    )
}

const ContentStyle={
    width: "100%",
    padding: "16px 0"
}
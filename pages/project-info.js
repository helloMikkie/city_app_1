import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Container } from "../components/Container"
import {Header} from "../components/Navigation/Header"
import  ProjectInfo from "../components/Projects/ProjectInfo"
import { TabbarMain } from "../components/Navigation/Tabbar_Main"
import { FAB_Projects } from "../components/Navigation/FAB_Projects"
import Layout_Project from "../components/Layouts/Layout_Project"

export default function Events() {
    return (
        <>
            <Head>
                <title>Project</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            
            <Layout_Project link_Back="javascript:history.back()" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                
                <Image src="/images/projects/gadamer.jpg"  
                width={2000} height={800}
                objectFit="cover" ></Image>

                <ProjectInfo title="B3 Gadamerplatz" number="15"/>

{/* Text Content */}

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

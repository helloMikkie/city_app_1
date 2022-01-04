import Head from "next/head"
import Image from "next/image"
import { FAB_Tours } from "../components/Navigation/FAB_Tours"
import Layout_Tour from "../components/Layouts/Layout_Tour"

export default function TourInfo() {
    return (
        <>
            <Head>
                <title>Tour</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            
            <Layout_Tour link_Back="javascript:history.back()" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Projects="/projects">
                
                <Image src="/images/projects/gadamer.jpg"  
                width={2000} height={800}
                objectFit="cover" ></Image>

            

{/* Text Content */}

                <FAB_Tours 
                karte="active"  
                link_Stationen="/tour-stations"
                link_Info="/tour-info"
                />
                
                </Layout_Tour>
        </>
    )
}

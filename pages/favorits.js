import Head from "next/head"
import Layout_Favorits from "../components/Layouts/Layout_Favorits"



export default function Favorits() {
    return (
        <>
            <Head>
                <title>Favoriten</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

         <Layout_Favorits link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Projects="/projects"  link_Exhibition="/exhibition" link_Events="/events" 
         link_Tours="/tours" />
                
              

        </>
    )
}

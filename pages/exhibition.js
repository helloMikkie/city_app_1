import Head from "next/head"
import Layout_Exhibition from "../components/Layouts/Layout_Exhibition"



export default function Exhibition() {
    return (
        <>
            <Head>
                <title>Ausstellung</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

         <Layout_Exhibition link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Projects="/projects"  link_Events="/events" link_Favorits="/favorits" link_Tours="/tours">
                
              

            </Layout_Exhibition>
            
        </>
    )
}

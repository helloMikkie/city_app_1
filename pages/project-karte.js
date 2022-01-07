import Head from "next/head"
import { FAB_Projects } from "../components/Navigation/FAB_Projects"
import Layout_Project from "../components/Layouts/Layout_Project"
import ProjectImage from "https://framer.com/m/Project-Image-x7p9.js@RFOjmg3bgv9SEsR6qRUy"

export default function Events() {
    return (
        <>
            <Head>
                <title>Project</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            
            <Layout_Project link_Back="javascript:history.back()" link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                

                {/* Karte Mapbox */}
                <iframe style={MapStyle} src="https://api.mapbox.com/styles/v1/heimannundschwantes/cjwtbq9hq1oeu1cq77uqcghb5.html?title=false&access_token=pk.eyJ1IjoiaGVpbWFubnVuZHNjaHdhbnRlcyIsImEiOiJjanU5ajNmeWYxdnlsM3pvMjB1aHN3djl1In0.C4x_2T6CWDi6Y1vG6YbLBg&zoomwheel=false#12.24/49.38749/8.716" title="IBA"></iframe>

                <FAB_Projects 
                karte="active" 
                
                link_Info="/project-info"
                link_Gallery="/project-gallery"
                link_Video="/project-video"
                />
                
                </Layout_Project>
        </>
    )
}

const MapStyle = {
    width: "100%",
    height: "100%",
    border: "none"
}

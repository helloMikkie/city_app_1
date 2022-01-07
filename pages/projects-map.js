import Head from "next/head"
import {ProjectCardList} from "../components/Projects/ProjectCardList"
import Layout_Projects_Map from "../components/Layouts/Layout_Projects_Map"

export default function Projects() {
    return (
        < >
            <Head>
                <title>Projects</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>
                <Layout_Projects_Map link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
                <iframe style={MapStyle} src="https://api.mapbox.com/styles/v1/heimannundschwantes/cjwtbq9hq1oeu1cq77uqcghb5.html?title=false&access_token=pk.eyJ1IjoiaGVpbWFubnVuZHNjaHdhbnRlcyIsImEiOiJjanU5ajNmeWYxdnlsM3pvMjB1aHN3djl1In0.C4x_2T6CWDi6Y1vG6YbLBg&zoomwheel=false#12.24/49.38749/8.716" title="IBA"></iframe>
                </Layout_Projects_Map>
                
                
            
        </>
    )
}

const MapStyle = {
    width: "100%",
    height: "100%",
    border: "none"
}

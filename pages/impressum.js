import Layout_IBA from "../components/Layouts/Layout_IBA"

import Link from "next/link"
import Text03InfoImpressumC from "https://framer.com/m/text-03-Info-Impressum-C-iQMk.js@9mwhOSdkooSWwHpj3ddW"

export default function Impressum() {
    return (
        <Layout_IBA link_Service="/service" link_Settings="/settings" link_Projects="/projects" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
           
            <Text03InfoImpressumC style={{ width: "100%"}}/>
         


            
        </Layout_IBA>
    )
}


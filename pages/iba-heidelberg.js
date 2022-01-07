import Layout_IBA_Detail from "../components/Layouts/Layout_IBA_detail"

import Link from "next/link"
import Text03InfoIBAC from "https://framer.com/m/text-0-3-Info-IBA-C-lx8a.js@gaMdnC0IWHBvsuyrvG8i"

export default function Impressum() {
    return (
        <Layout_IBA_Detail link_Back="javascript:history.back()" link_Service="/service" link_Settings="/settings" link_Projects="/projects" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
           
            <Text03InfoIBAC style={{ width: "100%"}}/>
         


            
        </Layout_IBA_Detail>
    )
}


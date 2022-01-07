import Layout_IBA_Detail from "../components/Layouts/Layout_IBA_detail"

import Link from "next/link"
import Text03InfoSponsorsC from "https://framer.com/m/text-0-3-Info-Sponsors-C-UBht.js@m6lM4TSH1zbHEndC38P4"

export default function Impressum() {
    return (
        <Layout_IBA_Detail link_Back="javascript:history.back()" link_Service="/service" link_Settings="/settings" link_Projects="/projects" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
           
            <Text03InfoSponsorsC style={{ width: "100%"}}/>
         


            
        </Layout_IBA_Detail>
    )
}


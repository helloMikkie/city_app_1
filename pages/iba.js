import Layout_IBA from "../components/Layouts/Layout_IBA"
import NavF_Item from "https://framer.com/m/nav-F-Item-WANh.js@rVAb5ntuNBKzyX2teneE"
import NavF_SocialMedia from "https://framer.com/m/nav-F-SocialMedia-gTDQ.js@21Oh2kdDV46AKiwU2BKk"

import Link from "next/link"


export default function Iba() {
    return (
        <Layout_IBA link_Service="/service" link_Settings="/settings" link_Projects="/projects" link_Events="/events" link_Exhibition="/exhibition" link_Favorits="/favorits" link_Tours="/tours">
            <Link href={"/iba-heidelberg"}>
                <a>
                    <NavF_Item style={NavItemStyle}
                    title="IBA Heidelberg" 
                    ikonVisible={false}
                    />
                </a>
            </Link>
            <Link href={"/impressum"} >
                <a>
                    <NavF_Item  style={NavItemStyle}
                    title="Impressum" 
                    ikonVisible={false}
                    />
                </a>
            </Link>
            <Link href={"/datenschutz"}>
                <a>
                    <NavF_Item style={NavItemStyle}
                    title="Datenschutz" 
                    ikonVisible={false}
                    />
                </a>
            </Link>
            <Link href={"/sponsors"}>
                <a>
                    <NavF_Item style={NavItemStyle}
                    title="Sponsoren" 
                    ikonVisible={false}
                    />
                </a>
            </Link>
            <NavF_SocialMedia style={NavItemStyle} />


            
        </Layout_IBA>
    )
}


const NavItemStyle={
    width: "100%",
    padding: "12px 0"
}
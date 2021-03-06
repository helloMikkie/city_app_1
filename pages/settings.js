import Layout_Settings from "../components/Layouts/Layout_Settings"
import NavF_Item from "https://framer.com/m/nav-F-Item-WANh.js@rVAb5ntuNBKzyX2teneE"

export default function Settings(){
    return(
        <Layout_Settings link_IBA="/iba" link_Service="/service"
        link_Projects="/projects"  link_Exhibition="/exhibition" link_Favorits="/favorits" link_Events="/events" link_Tours="/tours">
            <NavF_Item style={NavItemStyle}
             title="Deutsch" 
             ikon="/images/icons/check.svg" />
            <NavF_Item style={NavItemStyle}
             title="Englisch" 
             ikonVisible={false}
              />
              <NavF_Item style={NavItemStyle}
             title="App teilen" 
             ikon="/images/icons/share.svg" />
            
        </Layout_Settings>

    )
}

const NavItemStyle={
    width: "100%",
    padding: "12px 0"
}
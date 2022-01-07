import NavNavigationMenu from "https://framer.com/m/nav-Navigation-Menu-x0an.js@HvmdjGmQ4fPTceAffuRI"
import NavFTabbbarMain from "https://framer.com/m/nav-F-TabbbarMain-Osn8.js@5EQhAQIeJMCjmSQgVSgz"

import Toggle from "https://framer.com/m/Toggle-BwDP.js@aHHRYxr0tRvTGPpJZhtL"


import router, {useRouter} from "next/router"

export default function Layout_Projects({children, link_IBA, link_Service, link_Settings, link_Events, link_Tours, link_Exhibition, link_Favorits}) {
    const router = useRouter()
    return(
        <>
        <NavNavigationMenu  style={NavbarStyle}
        backVisible={false} 
        variant="default" 
        openIBA={() => router.push(link_IBA)}
        openService={() => router.push(link_Service)}
        openSettings={() => router.push(link_Settings)}
        ></NavNavigationMenu>
        <div style={Wrapper}>{children}
        
        </div>

        <div style={ProjectNav}>
         
        <Toggle style={ToggleStyle}
        variant="listActive"
        tap={() => router.push("/projects-map")}
        />
        <NavFTabbbarMain variant="projects active"
        style={TabbarStyle}
         events={() => router.push(link_Events)}
         touren={() => router.push(link_Tours)}
         ausstellung={() => router.push(link_Exhibition)}
         favoriten= {() => router.push(link_Favorits)}
        />
       
        </div>
        </>
    )
}

const ProjectNav = {
    width: "100%",
    position: "fixed",
    zIndex: 999,
    bottom: 0,
    display: "flex",
    flexDirection: "column"
 
}
const TabbarStyle = {
    width: "100%",

 
}
const NavbarStyle={
    width: "100%",
    position: "fixed",
    zIndex: 999,
    top: 0,
        
    }

    const ToggleStyle={
       width: "100%"
    }
    const Wrapper={
        position: "fixed",
        top: "48px",
        left: 0,
        right: 0,
        bottom: "64px",
        overflow: "scroll",
        padding: "16px",
     
        
    }
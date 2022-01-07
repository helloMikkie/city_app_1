import NavNavigationMenu from "https://framer.com/m/nav-Navigation-Menu-x0an.js@HvmdjGmQ4fPTceAffuRI"
import NavFTabbbarMain from "https://framer.com/m/nav-F-TabbbarMain-Osn8.js@5EQhAQIeJMCjmSQgVSgz"
import router, {useRouter} from "next/router"

export default function Layout_Favorits(
    {children, link_IBA, link_Service, link_Settings, link_Projects, link_Tours, link_Events,  link_Exhibition, link_Favorits}) {
    const router = useRouter()
    return(
        <>
        <NavNavigationMenu style={NavbarStyle} 
        backVisible={false} 
        variant="default" 
        openIBA={() => router.push(link_IBA)}
        openService={() => router.push(link_Service)}
        openSettings={() => router.push(link_Settings)}
        />
        <div style={Wrapper}>{children}</div>

        <NavFTabbbarMain style={TabbarStyle} 
        variant="favoritem active"
        projects={() => router.push(link_Projects)}
        events={() => router.push(link_Events)}
        touren={() => router.push(link_Tours)}
        ausstellung= {() => router.push(link_Exhibition)}
            />
        </>
    )
}


const TabbarStyle = {
    width: "100%",
    position: "fixed",
    zIndex: 999,
    bottom: 0,
 
}
const NavbarStyle={
    width: "100%",
    position: "fixed",
    zIndex: 999,
    top: 0,
        
    }
    const Wrapper={
        position: "fixed",
        top: "48px",
        left: 0,
        right: 0,
        bottom: "64px",
        overflow: "scroll",
       
     
        
    }

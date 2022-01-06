import NavNavigationMenu from "https://framer.com/m/nav-Navigation-Menu-x0an.js@HvmdjGmQ4fPTceAffuRI"
import NavFTabbbarMain from "https://framer.com/m/nav-F-TabbbarMain-Osn8.js@5EQhAQIeJMCjmSQgVSgz"
import router, {useRouter} from "next/router"

export default function Layout_Tours(
    {children, link_IBA, link_Service, link_Settings, link_Projects, link_Tours, link_Events,  link_Exhibition, link_Favorits}) {
    const router = useRouter()
    return(
        <>
        <NavNavigationMenu
        backVisible={false} 
        variant="default" 
        openIBA={() => router.push(link_IBA)}
        openService={() => router.push(link_Service)}
        openSettings={() => router.push(link_Settings)}
        ></NavNavigationMenu>
        <div className="container">{children}</div>
        <NavFTabbbarMain style={{width: "100%"}} 
        variant="tours active"
        projects={() => router.push(link_Projects)}
        events={() => router.push(link_Events)}
        ausstellung={() => router.push(link_Exhibition)}
        favoriten= {() => router.push(link_Favorits)}
            >
        
        </NavFTabbbarMain>
        </>
    )
}

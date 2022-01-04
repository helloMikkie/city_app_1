import NavNavigationMenu from "https://framer.com/m/nav-Navigation-Menu-x0an.js@HvmdjGmQ4fPTceAffuRI"
import NavFTabbbarMain from "https://framer.com/m/nav-F-TabbbarMain-Osn8.js@5EQhAQIeJMCjmSQgVSgz"
import router, {useRouter} from "next/router"

export default function Layout_Event({children, link_Back,link_IBA, link_Service, link_Settings, link_Events, link_Tours, link_Exhibition, link_Favorits}) {
    const router = useRouter()
    return(
        <>
        <NavNavigationMenu
        backVisible={true} 
        variant="default" 
        backToPrevious={() => router.push(link_Back)}
        openIBA={() => router.push(link_IBA)}
        openService={() => router.push(link_Service)}
        openSettings={() => router.push(link_Settings)}
        ></NavNavigationMenu>
        <div>{children}</div>
        <NavFTabbbarMain variant="program active" style={{width: "100%"}}
         events={() => router.push(link_Events)}
         touren={() => router.push(link_Tours)}
         ausstellung={() => router.push(link_Exhibition)}
         favoriten= {() => router.push(link_Favorits)}
        />
        </>
    )
}
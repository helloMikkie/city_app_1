import NavNavigationMenu from "https://framer.com/m/nav-Navigation-Menu-x0an.js@HvmdjGmQ4fPTceAffuRI"
import NavFTabbbarMain from "https://framer.com/m/nav-F-TabbbarMain-Osn8.js@IFwzTbrmHmAdKQKN91tg"
import router, {useRouter} from "next/router"

export default function Layout_Service({children, link_IBA, link_Settings,link_Projects, link_Events, link_Tours, link_Exhibition, link_Favorits}){
    const router = useRouter()
    return(
        <div>
            <NavNavigationMenu 
            backVisible={false} 
            variant="service-active" 
            openIBA={() => router.push(link_IBA)}
            openSettings={() => router.push(link_Settings)}
            />
            <div>{children}</div>
            <NavFTabbbarMain variant="default"
             projects={() => router.push(link_Projects)}
             events={() => router.push(link_Events)}
             touren={() => router.push(link_Tours)}
             ausstellung={() => router.push(link_Exhibition)}
             favoriten= {() => router.push(link_Favorits)}
            />
        </div>
      
    )
}



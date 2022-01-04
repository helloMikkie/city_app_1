import NavNavigationMenu from "https://framer.com/m/nav-Navigation-Menu-x0an.js@HvmdjGmQ4fPTceAffuRI"
import NavFTabbbarMain from "https://framer.com/m/nav-F-TabbbarMain-Osn8.js@5EQhAQIeJMCjmSQgVSgz"
import router, {useRouter} from "next/router"

export default function Layout_IBA({children, link_Service, link_Settings, link_Projects, link_Events, link_Tours, link_Exhibition, link_Favorits}){
    const router = useRouter()
    return(
        <div className="container" >
            <NavNavigationMenu  className="navbarStyle" style={{width: "100%"}}
            backVisible={false} 
            variant="info-active" 
            openService={() => router.push(link_Service)}
            openSettings={() => router.push(link_Settings)}
            />
            <div>{children}</div>
            <NavFTabbbarMain variant="default"  className="tabbarStyle" style={{width: "100%"}}
              projects={() => router.push(link_Projects)}
              events={() => router.push(link_Events)}
              touren={() => router.push(link_Tours)}
              ausstellung={() => router.push(link_Exhibition)}
              favoriten= {() => router.push(link_Favorits)}
              />
        </div>
      
    )
}



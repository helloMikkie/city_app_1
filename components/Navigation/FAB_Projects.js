import FFABProjects from "https://framer.com/m/F-FAB-Projects-LqQ8.js@Py3sXg1zZ5wWIFJyliXX"

import { useRouter } from "next/router"

export function FAB_Projects ({info, ansichten, karte, video, link_Info, link_Gallery, link_Karte, link_Video}){
    const router = useRouter()
    return(
        <FFABProjects style={FABStyle} 
        info={info} 
        ansichten={ansichten} 
        karte={karte}
        video={video}
        linkInfo={() => router.push(link_Info)}
        linkGallery= {()=> router.push(link_Gallery)}
        linkMap= {()=> router.push(link_Karte)}
        linkVideo= {()=> router.push(link_Video)}
        
        />
    )
}

const FABStyle={
    position: "fixed", 
    zIndex:"999",
    bottom: "64px",
    right: "-8px"
}
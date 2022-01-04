import FFABTours from "https://framer.com/m/F-FAB-Tours-1sTt.js@LD2cgd6ei4E7XEhtZoDl"


import { useRouter } from "next/router"

export function FAB_Tours ({info, stationen, karte, link_Info, link_Stationen, link_Karte}){
    const router = useRouter()
    return(
        <FFABTours style={FABStyle} 
        info={info} 
        stationen={stationen} 
        karte={karte}
        linkInfo={() => router.push(link_Info)}
        linkStationen= {()=> router.push(link_Stationen)}
        linkMap= {()=> router.push(link_Karte)}
        />
    )
}

const FABStyle={
    position: "fixed", 
    zIndex:"999",
    bottom: "64px",
    right: "-8px"
}
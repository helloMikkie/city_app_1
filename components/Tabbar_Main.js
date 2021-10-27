
import _TabbbarMain from "https://framer.com/m/TabbbarMain-TxFz.js@WnQ3LNbSNIgDKDhUw7kG"


export function TabbarMain({title}){
    return(
        <>
        <_TabbbarMain 
            style={TabbarStyle} />
        </>
    )
}


const TabbarStyle={
    width: "100%", 
    position: "fixed", 
    zIndex:"999",
    bottom: "0",
}
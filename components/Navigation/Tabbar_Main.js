

import NavFTabbbarMain from "https://framer.com/m/nav-F-TabbbarMain-Osn8.js@5EQhAQIeJMCjmSQgVSgz"


export function TabbarMain({variant}){

    return(
       
        <NavFTabbbarMain variant={variant}
            style={TabbarStyle}
        
            />
        
    )
}


const TabbarStyle={
    width: "100%", 
    position: "fixed", 
    zIndex:"999",
    bottom: "0",
}
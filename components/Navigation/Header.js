import _Header from "https://framer.com/m/Header-uY5m.js@NTINw9iSjTIUjDD5uKo8"
import NavNavigationMenu from "https://framer.com/m/nav-Navigation-Menu-x0an.js@zpPgT11fQM5AqopbYmDB"

export function Header({variant, backVisible}){
    return(
        <>
        <NavNavigationMenu  variant={variant} backVisible={backVisible} 
style={HeaderStyle} />
        </>
    )
}


const HeaderStyle={
    width: "100%", position: "fixed", zIndex:"999"
}
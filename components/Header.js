import _Header from "https://framer.com/m/Header-uY5m.js@NTINw9iSjTIUjDD5uKo8"

export function Header({title, variant}){
    return(
        <>
        <_Header title={title} variant={variant}  
style={HeaderStyle} />
        </>
    )
}


const HeaderStyle={
    width: "100%", position: "fixed", zIndex:"999"
}
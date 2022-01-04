import _FABEvent from "https://framer.com/m/FAB-Event-nuRv.js@hDcZS2QRqyTXVHZ0b96R"

export function FabEvent(){
    return(
        <>
        <_FABEvent 
            style={FABStyle} />
        </>
    )
}

const FABStyle={
    position: "fixed", 
    zIndex:"999",
    bottom: "20px",
    right: "20px"
}
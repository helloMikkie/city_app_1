import Head from "next/head"
// import Styles from "../styles/styles.module.css"

export default function Typography(){

    return(
        <>
        <Head>
          <title>Typography</title>  

        </Head>


        <h1 className="fs-700 uppercase semibold l-tight">Der Name B3 steht für den programmatischen Dreiklang des neuen Stadtteilzentrums am Gadamerplatz: Bildung, Betreuung und Begegnung. </h1>
        <h2 className="fs-600 semibold">Begegnung und lebenslanges Lernen unter einem Dach</h2>
        <h3 className="fs-500 regular">Der Name B3 steht für den programmatischen Dreiklang des neuen Stadtteilzentrums am Gadamerplatz: Bildung, Betreuung und Begegnung.</h3>
        
        </>
    )
}
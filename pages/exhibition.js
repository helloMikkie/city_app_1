import Head from "next/head"
import  Image  from "next/image"
import Layout_Exhibition from "../components/Layouts/Layout_Exhibition"
import NavF_Item from "https://framer.com/m/nav-F-Item-WANh.js@rVAb5ntuNBKzyX2teneE"


export default function Exhibition() {
    return (
        <>
            <Head>
                <title>Ausstellung</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

         <Layout_Exhibition link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Projects="/projects"  link_Events="/events" link_Favorits="/favorits" link_Tours="/tours">

        <div style={CoverStyle}>
        <Image src="/images/placeholder.jpg"  
			width={200} 
			height={200}
			objectFit="cover" >
        </Image>
        </div>

        <div >
         <NavF_Item 
         style={NavItemStyle}
         variant="yellow"
         title="Ausstellung"
         ikon="/images/icons/align.svg"
         />
         <NavF_Item 
         style={NavItemStyle}
         variant="yellow"
         title="Besucherinformationen"
         ikon="/images/icons/clock.svg"
         />
          <NavF_Item 
         style={NavItemStyle}
         variant="yellow"
         title="Ausstellungsorte"
         ikon="/images/icons/map.svg"
         />
           <NavF_Item 
         style={NavItemStyle}
         variant="yellow"
         title="Digitale Ausstellung"
         ikon="/images/icons/video.svg"
         />
         </div>

            </Layout_Exhibition>
            
        </>
    )
}


const CoverStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%"
}


const NavItemStyle={
    width: "100%",
    padding: "12px 0"
}
import Head from "next/head"
import Layout_Favorits from "../components/Layouts/Layout_Favorits"
import CardsFProjectCard from "https://framer.com/m/cards-F-Project-Card-hnH1.js@sGUk4g2YPIGEqFWO8ZcI"
import CardsFEventCard from "https://framer.com/m/cards-F-Event-Card-6iYs.js@57UF4L9cxStpRlCvB0TM"

export default function Favorits() {
    return (
        <>
            <Head>
                <title>Favoriten</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

         <Layout_Favorits link_IBA="/iba" link_Service="/service" link_Settings="/settings" link_Projects="/projects"  link_Exhibition="/exhibition" link_Events="/events" 
         link_Tours="/tours">
             
             <h2 style={Heading}>Projekte</h2>

             <div style={ProjectList}>
             <CardsFProjectCard
             style={ProjectCardStyle}
             title="Collegium Academicum"
             number="12"
             masstab="Gebäude"
             status="half"
             thumbnail={`/images/projects/academicum.jpg`}
             />
             <CardsFProjectCard
             style={ProjectCardStyle}
             title="Der andere Park"
             number="1"
             masstab="Quartier"
             status="empty"
             thumbnail={`/images/projects/andere_park.jpg`}
             />
             </div>
             <h2 style={Heading}>Programm</h2>
            <CardsFEventCard 
            style={EventCardStyle}
            date="23.6.2022"
            headline="Michael Braum im Gespräch mit Uwe Klingbeil"
            label="Gespräch"
            image={`/images/events/event-4.jpg`}
            />
            <CardsFEventCard 
            style={EventCardStyle}
            date="1.7.2022"
            headline='Sommerfest und Abschiedsfeier vom "alten" Haus der Jugend'
            label="Colloquium"
            image={`/images/events/event-8.jpg`}
            />      
            <h2 style={Heading}>Touren</h2>
            <CardsFEventCard 
            style={EventCardStyle}
            date="1.7.2022"
            headline='Patrick-Henry-Village-Baufeld B3/B4'
            label="Tour"
            image={`/images/events/event-8.jpg`}
            />  
            </Layout_Favorits>
                
              

        </>
    )
}

const Heading = {
    fontSize: "16px",
    margin: "16px 0",
    paddingLeft: "16px"
}

const ProjectList={
    padding: "0 16px"
}
const ProjectCardStyle={
    width: "100%",
    marginBottom:"20px"
}

const EventCardStyle = {
    width: "100%",
}
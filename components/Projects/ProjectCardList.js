import data from "../data/projects"
import Link from "next/link"

import CardsFProjectCard from "https://framer.com/m/cards-F-Project-Card-hnH1.js@sGUk4g2YPIGEqFWO8ZcI"

export function ProjectCardList() {
    return(
        <>
        {data.map( (project, index)=> (
            <Link href={`${project.link}`} key={index}>
                <a>
            <CardsFProjectCard 
            title={project.title}
            number={project.number}
            
            masstab={project.masstab}
           
            status={project.status}
            thumbnail={`/images/projects/${project.thumbnail}`}
            style={{
                width: "100%",
                marginBottom:" 20px"
            }}/>
            </a>
            </Link>
            ))}

</>
       
    )
}


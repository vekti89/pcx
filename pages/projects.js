
import Head from 'next/head'
import Link from "next/link"

import {projects} from "../helpers/projects"; 

export default function Home() { 

    const ProcodexProjects = projects.map((project, i)=>
      
        <div className="col-md-6 p-3 text-center text-white" key={project.name}>
            <div style={{ backgroundImage: `url(${project.url})`, backgroundPosition: "center", height: "250px", borderRadius:"5px" }}>
                <h5 style={{paddingTop:"100px", fontWeight:"bold"}}>{project.name}</h5>
                        <h5><Link href={`/project?name=${project.name}`}><a className="btn btn-sm btn-warning ">VIEW</a></Link></h5>
            </div>
        </div>
    )


    return (
        <div className="container py-3 py-md-5">
             <Head>
                <title>Procodex - Projects</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, Projects and References" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className="row">
                
                {ProcodexProjects}
                
            </div>
            
        </div>
    )
}

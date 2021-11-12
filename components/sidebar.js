import Link from "next/link"
import Image from 'next/image'

import { projects } from "../helpers/projects"
import styles from './sidebar.module.css'

export default function Sidebar () {
    const projectImages = projects.map(project=>
        
        <div className={styles.image} key={project.name} >
            <Link href={`/project?name=${project.name}`}><a>
                <Image src={project.url} alt={project.name} width="100%" height="100%" />
            </a></Link>
        </div>
        
    )
    return (
        <main className={styles.sidebar}>

            <section className={styles.projects}>
               <h5>Latest Projects</h5>
               <div className={styles.images}>{projectImages}</div>
            </section>

            <section className={styles.contact}>
                <p>Do you have a question?</p>
                <Link href="/contact">
                    <a className="btn btn-sm btn-warning">Contact us</a>
                </Link>
            </section>
            
        </main> 
    )
}
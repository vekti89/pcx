import Sidebar from "../components/sidebar";

import Head from 'next/head'

import styles from './distribution.module.css'
import {services} from "../helpers/services";

export default function ProjectDesign () {
    return (
        
        <main className={styles.distribution}>
            <Head>
                <title>Project Design - Procodex</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, Project Design" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <section className={styles.banner} style={{backgroundImage: `url("/services/project.jpg")`}}></section>
            
            <section className={styles.bannerText}>
               <h3>{services[1].title.toUpperCase()}</h3>
            </section>
            
            <div className="container">
            <section className={styles.content} >
                <Sidebar/>
                
                <div className={styles.service}>
                    <h5>Project Design</h5>
                    <p>{services[1].short}</p>
                    <p>We do all phases of project design:</p>
                   
                    <ul>
                        <li>Defining the concept of object operation</li>
                        <li>Project assignments</li>
                        <li>Budget estimation</li>
                        <li>Development of preliminary, main, construction projects and final As-Built-Projects</li>
                    </ul>
            
                    <p>The results are projects which are in line with the highest standards and the real needs 
                        of investors.</p>

                </div>
            </section>
            </div>
            
        </main>

        
    )
}
import Sidebar from "../components/sidebar";

import Head from 'next/head'
import Link from "next/link"

import styles from './distribution.module.css'

export default function Home() {
    return (
        <main className={styles.distribution}>
            <Head>
                <title>Procodex - About</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, About" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className={styles.banner} style={{backgroundImage: `url("/services/project.jpg")`}}></section>
            

            <div className="container pt-3 pt-md-5">
            <section className={styles.content} >
                <Sidebar/>
                
                    <div className={styles.service}>
                        <section>
                            <div className="container">
                                <p>The main activity of the company is design and implementation of installations in buildings 
                                    of all types and purposes. We perform all types of installations:</p>
                               
                                    <ul>
                                        <li>Sound system, video surveillance, alarm systems, access control, intercoms</li>
                                        <li>ELV and automation systems</li>
                                        <li>Audio / video presentation systems, conference systems</li>
                                        <li>Telecommunication systems, active and passive computer networks</li>
                                        <li>Wireless networks, server rooms</li>
                                        <li>Fire and gas detection and alarm systems, garage signaling systems</li>
                                    </ul>
                                
                                <p>Based on the knowledge and experience of our engineers, we are able to find optimal 
                                    solutions for all investor's requirements, to make quick and high-quality changes 
                                    during the execution of works, as well as to timely point out potential problems in 
                                    future system operation and suggest ways to correct them.</p>
                            </div>
                        </section>

                    </div>
            </section>
            </div>

        </main>
       
    )
}



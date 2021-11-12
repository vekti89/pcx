import Sidebar from "../components/sidebar";

import Head from 'next/head'

import styles from './distribution.module.css'
import {services} from "../helpers/services";

export default function Distribution () {
    return (
        
        <main className={styles.distribution}>
            <Head>
                <title>Distribution - Procodex</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, Distribution Services" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <section className={styles.banner} style={{backgroundImage: `url("/services/project.jpg")`}}></section>
            
            <section className={styles.bannerText}>
               <h3>{services[0].title.toUpperCase()}</h3>
            </section>
            
            <div className="container">
            <section className={styles.content} >
                <Sidebar/>
                
                <div className={styles.service}>
                    <h5>Distribution</h5>
                    <img src="/services/distribution.jpg"/>
                </div>
            </section>
            </div>
            
        </main>

        
    )
}
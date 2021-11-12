import Sidebar from "../components/sidebar";

import Head from 'next/head'

import styles from './distribution.module.css'
import {services} from "../helpers/services";

export default function Implementation () {
    return (
        
        <main className={styles.distribution}>
            <Head>
                <title>Implementation - Procodex</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, Implementation Services" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <section className={styles.banner} style={{backgroundImage: `url("/services/cabling.jpg")`}}></section>
            
            <section className={styles.bannerText}>
               <h3>{services[2].title.toUpperCase()}</h3>
            </section>
            
            <div className="container">
            <section className={styles.content} >
                <Sidebar/>
                
                <div className={styles.service}>
                    <h5>Implementation</h5>
                    <p>{services[2].short}</p>
                    <p>Our staff is trained to perform the following works with quality in mind and according to the manufacturer's recommendations:</p>
                   
                    <ul>
                        <li>Cabling</li>
                        <li>Equipment installation</li>
                        <li>Testing</li>
                        <li>Commissioning</li>
                        <li>User training</li>
                        <li>Technical approval</li>
                    </ul>
            
                    <p>The results are projects which are in line with the highest standards and real needs of investors.</p>

                </div>
            </section>
            </div>
            
        </main>

        
    )
}
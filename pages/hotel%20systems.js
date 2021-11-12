import Sidebar from "../components/sidebar";

import Head from 'next/head'

import styles from './distribution.module.css'
import {services} from "../helpers/services";

export default function HotelSystems () {
    return (
        
        <main className={styles.distribution}>
            <Head>
                <title>Hotel Systems - Procodex</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, Hotel Systems" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <section className={styles.banner} style={{backgroundImage: `url("/services/systemIntegration.jpg")`, backgroundPosition:"center"}}></section>
            
            <section className={styles.bannerText}>
               <h3>{services[3].title.toUpperCase()}</h3>
            </section>
            
            <div className="container">
            <section className={styles.content} >
                <Sidebar/>
                
                <div className={styles.service}>
                    <h5>Hotel Systems</h5>
                    <p>{services[3].short}</p>
                    <p>Hotel systems are integrated into unique installation system which is more efficient and easier to manage, use, upgrade and maintain.</p>
                    <p>Systems designed in this way enable:</p>
                   
                    <ul>
                        <li>Management of all installations at a single level</li>
                        <li>Easier system management and control</li>
                        <li>Greater security and reliability in the operation of the system</li>
                        <li>Greater energy savings of the facility</li>
                    </ul>
            
                    <p>ProCodex d.o.o. uses the most modern methods in designing and implementing of all installations.</p>

                </div>
            </section>
            </div>
            
        </main>

        
    )
}
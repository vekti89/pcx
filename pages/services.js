import Sidebar from "../components/sidebar";

import Head from 'next/head'
import Link from "next/link"

import {services} from "../helpers/services";

import serviceStyles from '../components/services.module.css'
import styles from './distribution.module.css'

export default function Home() {

    const ProcodexServices = services.map(service =>
        
        <Link href={`/${service.title.toLowerCase()}`} className="content col-md-6" key={serviceStyles.title} >
        <section className="content col-lg-6">
            <h5>{service.title.toUpperCase()}</h5>
            <div className="little-card">
                <i className={`flaticon-${service.icon}`}></i>
                <p>{service.short}</p>
            </div>
        </section>
        </Link>

        
        )

    return (
        <main className={styles.distribution}>
             <Head>
                <title>Procodex - Services</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, Services" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <section className={styles.banner} style={{backgroundImage: `url("/services/systemIntegration.jpg")`, backgroundPosition:"center"}}></section>
            

            <div className="container pt-3 pt-md-5">
            <section className={styles.content} >
                <Sidebar/>
                
                    <div className={styles.service}>
                        <main id="services" className={serviceStyles.services}>
                            <div className="container">
                                <div className="row">
                                    {ProcodexServices}
                                </div>
                            </div>

                        </main>

                    </div>
            </section>
            </div>

        </main>
       
    )
}

import Link from "next/link"

import styles from './services.module.css'
import {services} from "../helpers/services";

export default function Services (){
    
    const ProcodexServices = services.map(service =>
        
        <Link href={`/${service.title.toLowerCase()}`} className="content col-md-6" key={service.title} >
        <section className="content col-md-6">
            <h5>{service.title.toUpperCase()}</h5>
            <div className="little-card">
                <i className={`flaticon-${service.icon}`}></i>
                <p>{service.short}</p>
            </div>
        </section>
        </Link>

        
        )
    return (
        <>
            
            <main id="services" className={styles.services}>
                <div className="container">
                <h2>OUR SERVICES</h2>
                    <div className="row">
                        {ProcodexServices}
                    </div>
                </div>

            </main>
        </>
    )
}
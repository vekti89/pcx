import Link from "next/link"
import Image from 'next/image'

import styles from './slideshow.module.css'



export default function Slideshow (){
    return (
        <section className={styles.slideshowContainer}>

            <ul className={styles.slideshow}>
                <li>
                    <div>
                        <h1>PHYSICAL SECURITY SOLUTIONS</h1>
                        <p>VIDEO AND AUDIO SURVEILLANCE, ACCESS CONTROL, INTERFON</p>
                    </div>
                </li>

                <li>
                    <div>
                        <h1>SYSTEM INTEGRATION</h1>
                        <p>RELIABLY AND HIGHLY PROFESSIONAL</p>
                    </div>
                </li>

                <li>
                    <div>
                        <h1>SYSTEM IMPLEMENTATION</h1>
                        <p>LOW VOLTAGE SYSTEMS AND AUTOMATION</p>
                    </div>
                </li>
            </ul>

        </section>
    )
}
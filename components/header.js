import Link from "next/link"
import { useRouter } from 'next/router'

import Image from 'next/image'

import styles from './header.module.css'

export default function Header (){
    const router = useRouter()
    return (
        <>
            <section className={styles.header}>
                <Image
                    src="/procodex-logo.png"
                    height={60}
                    width={250}
                    alt="procodex-logo"
                />
                <div className={styles.info}>
                    <div className={styles.card}>
                        <i className="flaticon-phone-call"></i>
                        <div>
                            <p>PHONE NUMBER</p>
                            <p className="info">
                                <a href="tel:+381112603821">+381 11 2603 821</a></p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <i className="flaticon-clock"></i>
                        <div>
                            <p>WORKING HOURS</p>
                            <p className="info">Mon - Sat 8:00 - 18:00</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <i className="flaticon-pin"></i>
                        <div>
                            <p>ADDRESS</p>
                            <p className="info">Jovana Miodragovica 3</p>
                        </div>
                    </div>
                </div>

            </section> 

            <section className={styles.navigation}>
                
                <div className={styles.links}>
                    <Link href="/"><a>HOME</a></Link>

                    <Link href={router.pathname==="/" ? "#about" : "/about" } ><a>ABOUT</a></Link>

                    <Link href={router.pathname==="/" ? "#services" : "/services" }><a>SERVICES</a></Link>

                    <Link href="/projects"><a>PROJECTS</a></Link>

                    <Link href="/contact"><a>CONTACT</a></Link>
                </div>
                
                <div>
                    <Link href="#"><a className="btn btn-sm btn-light pt-2 mx-1"><i className="flaticon-twitter"></i></a></Link>
                    <Link href="#"><a className="btn btn-sm btn-light pt-2 mx-1"><i className="flaticon-facebook"></i></a></Link>
                    <Link href="#"><a className="btn btn-sm btn-light pt-2 mx-1"><i className="flaticon-instagram"></i></a></Link>
                </div>

            </section>
        </>
    )
}
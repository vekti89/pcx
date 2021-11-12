import Link from "next/link"

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './footer.module.css'

export default function Footer (){
    return (
        <>
            <section className={styles.footer}>
                <div>
                    <h5>FOLLOW US</h5>
                    <div className="mb-3">
                        <Link href="#"><a className="btn btn-sm btn-light pt-2 mx-1"><i className="flaticon-twitter"></i></a></Link>
                        <Link href="#"><a className="btn btn-sm btn-light pt-2 mx-1"><i className="flaticon-facebook"></i></a></Link>
                        <Link href="#"><a className="btn btn-sm btn-light pt-2 mx-1"><i className="flaticon-instagram"></i></a></Link>
                    </div>
                </div>
                
                <div>
                    <h5>CONTACT</h5>
                    <div>
                        <Link href="/contact"><a><i className="flaticon-pin"></i> Jovana Miodragovica 3, Belgrade</a></Link>                        
                        <p className="mt-3"><a href="tel:+381119603821"><i className="flaticon-phone-call"></i> +381 11 9603 821</a></p>                       
                        <p><a href="mailto:vekti89@procodex.com" > <span><FontAwesomeIcon icon={faEnvelope} /> </span> office@procodex.com</a></p>                        
                    </div>
                </div>

                <div>
                    <h5>FILE DOWNLOAD</h5>
                    <div>
                        <p><a className="btn btn-sm btn-outline-warning text-white" href="/engineeringSolutions.pdf">Engineering Solutions</a></p>
                        <p><a className="btn btn-sm btn-outline-warning text-white" href="/hotelSolutions.pdf">Hotel Solutions</a></p>                   
                    </div>
                </div>

            </section>

        </>
    )
}
import styles from './about.module.css'

export default function About (){
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <p>The main activity of the company is design and implementation of installations in 
                    buildings of all types and purposes. We perform all types of installations:</p>
                <div className={styles.list}>
                    <ul>
                        <li>Sound system, video surveillance, alarm systems, access control, intercoms</li>
                        <li>ELV and automation systems</li>
                        <li>Audio / video presentation systems, conference systems</li>
                    </ul>
                    <ul>
                        <li>Telecommunication systems, active and passive computer networks</li>
                        <li>Wireless networks, server rooms</li>
                        <li>Fire and gas detection and alarm systems, garage signaling systems</li>
                    </ul>
                </div>
                <p>Based on the knowledge and experience of our engineers, we are able to find optimal 
                    solutions for all investor's requirements, to make quick and high-quality changes 
                    during the execution of works, as well as to timely point out potential problems in 
                    future system operation and suggest ways to correct them.</p>
            </div>
        </section>
    )
}
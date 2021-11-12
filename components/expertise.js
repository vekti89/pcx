import Link from "next/link"


import styles from './expertise.module.css'

export default function Expertise (){
    
     const expertise = [
            {
                title:"Telecommunication systems", 
                icon:"phone-call", 
            },
            {
                title:"Fire alarm systems", 
                icon:"system", 
            },
            {
                title:"Conference systems", 
                icon:"handshake", 
            }
        ];
    
    const ProcodexExpertise = expertise.map(expertise=>
        
        <section className="col-sm-4" key={expertise.title}>
            
                <i className={`flaticon-${expertise.icon}`}></i>
                <h5>{expertise.title}</h5>
            
        </section>
        
        )
    return (
        <>
            
            <main className={styles.expertise}>
                <div className="container">
                <h4>ENGINEERING SOLUTION WITH SYSTEM IMPLEMENTATION IS OUR EXPERTISE!</h4>
                <p>Our goal is to be one-stop-shop for complete and quality solution for all installations in all kinds of facilities.</p>    
                    <div className="row">
                        {ProcodexExpertise}
                    </div>
                </div>

            </main>
        </>
    )
}
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/map'), {
  ssr: false
});

//export default () => <DynamicComponentWithNoSSR />;

import ContactForm from '../components/ContactForm'
import map from '../components/map';

import Head from 'next/head'
import Link from "next/link"

import styles from './contact.module.css'


export default function Contact(props) {
        return (
        <div>
            <Head>
                <title>Procodex - Contact</title>
                <meta name="description" content="Procodex Company - Engineering Solutions, Contact" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className={styles.banner} style={{backgroundImage: `url("/services/systemIntegration.jpg")`, backgroundPosition:"center"}}></section>

            <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ContactForm service_id={props.service_id} template_id={props.template_id} user_id={props.user_id}/>
                    </div>
                    <div className="col-md-6">
                        <DynamicComponentWithNoSSR/>
                    </div>
                </div>
            </section>
           
        </div>
    )
}


export async function getStaticProps() {
    const service_id = process.env.service_id;
    const template_id = process.env.template_id;
    const user_id = process.env.user_id;
    return {
        props: {
          service_id:service_id,
          template_id:template_id,
          user_id:user_id, 
        },
      } 
  }
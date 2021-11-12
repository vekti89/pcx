import Slideshow from '../components/slideshow'
import Services from '../components/services'
import Expertise from '../components/expertise'
import ProjectsSlider from '../components/projectsSlider'
import About from '../components/about'

import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Procodex - Welcome</title>
        <meta name="description" content="Procodex - Engineering Solutions" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Slideshow/>
        <Services/>
        <Expertise/>
        <ProjectsSlider/>
        <About/>
      </main>

      
    </div>
  )
}

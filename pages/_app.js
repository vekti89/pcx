{/* The following import prevents a Font Awesome icon server-side rendering bug,
where the icons flash from a very large icon down to a properly sized one:*/}
import '@fortawesome/fontawesome-svg-core/styles.css';
{/* Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */}
import Header from '../components/header'
import Footer from '../components/footer'
import Head from "next/head";

import '../styles/global.css'
import "/styles/sliderStyles.css"


function App({ Component, pageProps }) {
  return (
  <>
      <Head>
{/* Mapbox CSS */}
<link
  href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
  rel="stylesheet"
/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"/>
        
      <link rel="stylesheet" type="text/css" href="/icons/collection1/font/flaticon.css"/>

{/* Responsive meta tag */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

{/* bootstrap CDN */}

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />

{/* lightSlider library */}

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"></script>
      </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default App

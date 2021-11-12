import { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

import styles from './map.module.css'

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '300px',
      latitude: 44.83699042243416,
      longitude: 20.414413105470985,
      zoom: 13
    }
  };
  
  

  render() {
    return (
      <>
        <ReactMapGL
          className={styles.map}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1IjoidmVrdGk4OSIsImEiOiJja2oybDdnbTMwMjQ4MnNvOXZudXFoZjBkIn0.pHhuf4JAN-cNFVxy2T0oMQ"
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}>
          <Marker latitude={44.83699042243416} longitude={20.414413105470985} >
            <div className={styles.marker}><span></span></div>
          </Marker>
        </ReactMapGL>

        <section className={styles.contactData}>
        <h5 className="px-2">Contact us</h5>

        <div>
          <p>Procodex d.o.o</p>
          <p className="info"><i className="flaticon-pin"></i> Jovana Miodragovica 3</p>
          <p className="info"><a href="tel:+381119603821"> <i className="flaticon-phone-call"></i> +381 11 9603 821</a></p>

        </div>

        </section>
      </>
    );
  }
}

export default Map;
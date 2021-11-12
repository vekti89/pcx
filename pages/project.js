import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faFileSignature} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {projects} from "../helpers/projects";

import styles from './project.module.css'

const Project = ({ name, project }) => (
    <main className={styles.project}>
        <div className="container">
            <div className="row my-3 my-md-5">

                <section className="col-md-6 px-lg-5">
                    <div>
                        <h4>{project.name}</h4>
                        <p className="my-3 my-md-5">{project.about}</p>
                    </div>

                    <img src={project.url} alt={project.name}/>
                </section>


                <section className="col-md-6 px-5">
                    <div className={styles.details}>
                        <h4>Project Details</h4>
                        <div className="row my-3 my-md-5">

                            <div className="col-lg-6">
                                <h5><span><FontAwesomeIcon icon={faUser} /> </span> CLIENT:</h5>
                                <p>{project.client}</p>
                                <h5><span><FontAwesomeIcon icon={faMapMarker} /> </span> LOCATION:</h5>
                                <p>{project.location}</p>
                                <h5><span><FontAwesomeIcon icon={faInfoCircle} /> </span> SURFACE:</h5>
                                <p>{project.surface}</p>
                            </div>                       
                            <div className="col-lg-6">
                                <h5><span><FontAwesomeIcon icon={faFileInvoiceDollar} /> </span> VALUE:</h5>
                                <p>{project.value}</p>
                                <h5><span><FontAwesomeIcon icon={faClock} /> </span> FINISHED:</h5>
                                <p>{project.finished}</p>
                                <h5><span><FontAwesomeIcon icon={faFileSignature} /> </span> CONTRACTOR:</h5>
                                <p>{project.contractor}</p>
                            </div>                       

                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    </main>
)


Project.getInitialProps = async({query}) => {
   
    const result = projects.find( ({ name }) => name === query.name)    
    console.log({...query, project:result});

    return {...query, project:result};
}

export default Project;
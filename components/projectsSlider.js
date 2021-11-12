import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import {projects} from "../helpers/projects";

export default function ProjectsSlider (props) {
    
    
  const [sliderRef] = useKeenSlider({
    slidesPerView: 4,
    breakpoints: {
        '(max-width: 576px)': {
            slidesPerView: 1,
        },
        '(min-width: 576px) and (max-width: 992px)': {
            slidesPerView: 2,
          },
        '(min-width: 992px) and (max-width: 1400px)': {
            slidesPerView: 3,
          },
      },
    mode: "free",
    spacing: 10,
    loop: false,
  })

  const ProcodexProjects = projects.map((project, i)=>
        
        <div className={`keen-slider__slide number-slide${i+1}`} key={project.name}>
          <div className="overlay"></div>
          <h5>{project.name}</h5>
          <h5><Link href={`/project?name=${project.name}`}><a className="btn btn-sm btn-warning stretched-link">VIEW</a></Link></h5>
        </div>
        
        )

  return (
      <section id="slider">
          <h4>Our Projects</h4>
          <div ref={sliderRef} className="keen-slider">

              {ProcodexProjects}
          </div>
      </section>
  )
}
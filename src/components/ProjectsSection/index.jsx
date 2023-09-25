import { projects } from "../../data/projects"
import { ProjectCard } from "./ProjectCard"
import style from './style.module.css'

export const ProjectSection = () => {
    return (
        <section className={style.flexbox}>
            <h2 className="title2">Projetos</h2>
            
            <div className={style.containerProjects} >
                {projects.map((project)=> <ProjectCard  {...project}/>)}
            </div>
        </section>
    )
}
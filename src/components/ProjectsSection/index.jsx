import { ProjectsList } from "./ProjectsList";
import style from "./style.module.css"

export function ProjectsSection() {

    return (
        <section className={`${style.container} center`} id="projects" >
            <h1 className="title1">
                Projetos
            </h1>
            <ProjectsList />
        </section>
    )
}
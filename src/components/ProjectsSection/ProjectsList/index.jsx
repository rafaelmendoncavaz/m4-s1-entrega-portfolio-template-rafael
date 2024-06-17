import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../../../data/projects.js";
import style from './style.module.css';

export function ProjectsList() {

    return (
        <ul className={style.container}>
            {
                projects.map(projs => 
                    <ProjectsCard key={projs.id} projs={projs} />
                )
            }
        </ul>
    )
}
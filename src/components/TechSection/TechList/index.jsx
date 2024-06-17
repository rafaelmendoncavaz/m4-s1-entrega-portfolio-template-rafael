import { TechCard } from "./TechCard"
import { technologies } from "../../../data/technologies.js"
import style from './style.module.css'

export function TechList() {

    return (
        <ul className={style.container}>
            {
                technologies.map(tech => 
                    <TechCard key={tech.id} tech={tech} />
                    )
            }
        </ul>
    )
}
import { TechList } from "./TechList"
import style from "./style.module.css"

export function TechSection() {

    return(
        <section className={`${style.container} center`} id="stacks" >
            <h1 className="title1">
                Tecnologias
            </h1>
            <div>
                <TechList />
            </div>
        </section>
    )
}
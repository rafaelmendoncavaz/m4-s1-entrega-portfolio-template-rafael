import gitHubIcon from "../../../../assets/github-icon.png"

export function ProjectsCard({ projs }) {

    return (
        <div className="proj">
            <div>
                <h3 className="title3">{projs.name}</h3>
                <img src={gitHubIcon} alt="Icone GitHub" />
            </div>
            <p className="paragraph">
                {projs.description}
            </p>
            <a className="link" href="#">Saiba mais</a>
        </div>
    )
}
export function TechCard({ tech }) {

    return (
        <li className="tech">
            <img src={tech.img} alt={tech.name} />
            <h3 className="title3">
                {tech.name}
            </h3>
        </li>
    )
}
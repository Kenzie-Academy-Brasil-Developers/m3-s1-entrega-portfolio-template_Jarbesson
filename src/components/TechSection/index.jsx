import { TechList } from "./TechList"
import { technologies } from "../../data/technologies"
import style from './style.module.css'

export const TechSection = () => {
    return (
        <section className={style.flexbox}>
            <h2 className="title2" >Tecnologias</h2>
            <ul>
                {technologies.map(technologie => {
                    return (
                        <li key={technologie.name}>
                            <TechList title={technologie.name} image={technologie.img} />
                        </li>
                    )
                })}

            </ul>
        </section>
    )
}
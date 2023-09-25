import git from "../../../assets/git-icon.png";
import styles from './style.module.css'


export const ProjectCard = ({ name, description, }) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer} >
                <h3 className="title3">{name}</h3>
                <img src={git} alt="Logo do git hub" />
            </div>

            <p className={`${styles.paragraph} paragraph`}>{description}</p>

            <a className="link" href="#"> Saiba mais</a>
        </div>
    )
}
import whatsapp from '../../assets/whatsapp-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'
import { user } from '../../data/user';
import styles from './style.module.css'

export const Footer = () => {
    return (
        <footer className={styles.flexbox}>

            <div className={styles.containerFirst}>
                <h2 className='title2'>Contato</h2>
                <div className={styles.containerIcons}>

                    <img src={whatsapp} alt="Logo do whatsapp" />
                    <img src={linkedin} alt="Logo do linkedin" />
                    <img src={github} alt="Logo do github" />

                </div>
            </div>

            <div className={styles.containerSecond}>
                <p className='paragraph'>Todos os direitos reservados - {user}</p>
            </div>

        </footer>
    );
};
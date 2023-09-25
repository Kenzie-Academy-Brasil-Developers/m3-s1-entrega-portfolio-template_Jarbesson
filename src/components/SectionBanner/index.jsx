import { user } from "../../data/user"
import Banner from'../../assets/banner-img.png'
import style from './style.module.css'


export const SectionBanner = () => {
    return (
        <section className={style.flexbox}>
            <div>
                <h3 className="label">{user}</h3>
                <h1 className="title1">Bem vindo ao
                    meu portfólio</h1>
                    <p className="paragraph">Uma frase interessante sobre mim</p>
                    <button className="btn">Saiba mais</button>
            </div>
            <img src={Banner} alt="imagem do banner" />
        </section>
    )
}
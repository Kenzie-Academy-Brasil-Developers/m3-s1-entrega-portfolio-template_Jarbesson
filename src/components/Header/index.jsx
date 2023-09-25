import portfolio from"../../assets/portfolio.png"
import style from './style.module.css'
import'../../styles/button.css'

 export const Header = () =>{
    return(
        <header className={style.flexbox}>
            <img src={portfolio} alt="Logo do portfolio" />
            <nav>
                <a className="paragraph" href="#">Sobre</a>
                <a className="paragraph" href="#">Stacks</a>
                <a className="paragraph" href="#">Projetos</a>
            </nav>
            <button className="btn">Contato</button>
        </header>
    )
}
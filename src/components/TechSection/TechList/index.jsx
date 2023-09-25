export const TechList = ({title,image}) =>{
    return(
        <>
        <img src={image} alt= 'imagem dos cards do tech'/>
        <h3 className="title3" >{title}</h3>
        </>
    )
}
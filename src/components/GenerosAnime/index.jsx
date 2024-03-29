import { lista } from "../../data/generosAnimes"
import { Link } from "react-router-dom"

const GenerosAnime = () => {
    return (
        <div>
            <h1 className="title-level1-genre">Gêneros Anime</h1>
            <div className="genero-container">
                {lista.map((genero) => (
                    <Link key={genero.id} to={`/animes/generos/${genero.genreName}`}>  
                            <div  style={{width:'290px',height: '290px'}}>
                                <h3 className="title-generos">{genero.name}</h3>
                                <div key={genero.id} style={{ backgroundImage: `url(${genero.img})`, filter: 'brightness(70%)' }} className="card-genero"></div>
                            </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default GenerosAnime
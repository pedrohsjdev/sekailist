import './style.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Erro from '../../pages/Erro'
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const MostPopularMangas = () => {

    const { data, error, isLoading } = useFetch("https://api.jikan.moe/v4/top/manga");
    const id = "section-3"

    const slideLeft = () => {
        var slider = document.getElementById(id)
        slider.scrollLeft = slider.scrollLeft - 1100
    }

    const slideRight = () => {
        var slider = document.getElementById(id)
        slider.scrollLeft = slider.scrollLeft + 1100
    }

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (error) {
        return <Erro />
    }

    return (
        <section>
            <h2 className='name-section'>Mangas mais populares</h2>
            <div className='list-section'>
                <MdChevronLeft size={40} onClick={slideLeft} className='arrow' />
                <div id={id} className='slider-list'>
                    {data.data.map((card) => (
                        <Link key={card.mal_id} to={`manga/${card.mal_id}`}>
                            <div key={card.mal_id} style={{ backgroundImage: `url(${card.images.webp.large_image_url})`, backgroundSize: "cover" }} className='item-section'>
                            </div>
                        </Link>
                    ))}
                </div>
                <MdChevronRight size={40} onClick={slideRight} className='arrow' />
            </div>
        </section>
    )
}
export default MostPopularMangas


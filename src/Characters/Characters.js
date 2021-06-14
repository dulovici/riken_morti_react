
import { useEffect, useState } from 'react';
import './characters.css';


export const Characters = (props) => {
    const [cards, setCard] = useState([]);
    const [active, setActive] = useState(false);
    console.log(active);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${1}`)
            .then(res => res.json())
            .then(dta => {

                setCard(dta.results)
            })
    }, []);


    return (
        <div className='cards'>
            {cards.map(e => {
                return (
                    <div key={e.id} className='card' >
                        <img src={e.image} alt='character-img' onClick={() => props.catch(e.id)} />
                        <h3>{e.name}</h3>
                        <button className={`${active ? 'liked' : ''}`} onClick={() => setActive(!active)}>Like</button>
                    </div>
                )
            })}
        </div>
    )
}



//napravi novi modul Card
//ubaci mu u props state-Cards
//u Cardu generisi karticu sa tim propsom 
import { useEffect, useState } from "react";
import '../Character/character.css'



export const Character = (props) => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${props.id}`)
            .then(res => res.json())
            .then(dta => {


                setCard(dta)
            })
    });


    return (
        <div className='character-wr'>
            <img src={card.image} alt='img'></img>
            <div className='info'>
                <h2>Name:{card.name}</h2>
                <h2>Species:{card.species}</h2>
                <h2>Origin:{card.origin?.name}</h2>
            </div>
        </div>
    )
}
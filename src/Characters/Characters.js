
import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import './characters.css';


export const Characters = (props) => {
    const [cards, setCard] = useState([]);


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
                return <Card key={e.id} catch={props.catch} char={e} />
            })}
        </div>
    )
}



import '../Card/card.css';
import { useState } from 'react';

export const Card = (props) => {
    const [active, setActive] = useState(false);
    const { char } = props;
    return (
        <div className='card' >
            <img src={char.image} alt='character-img' onClick={() => props.catch(char.id)} />
            <h3>{char.name}</h3>
            <button className={`${active ? 'liked' : ''}`} onClick={() => setActive(!active)}>Like</button>
        </div>
    )
}




// {cards.map(e => {
//     return (
//         <div key={e.id} className='card' >
//             <img src={e.image} alt='character-img' onClick={() => props.catch(e.id)} />
//             <h3>{e.name}</h3>
//             <button className={`${active ? 'liked' : ''}`} onClick={() => setActive(!active)}>Like</button>
//         </div>
//     )
// })}




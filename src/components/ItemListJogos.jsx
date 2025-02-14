import React from 'react'
import SingleItemJogos from './SingleItemJogos';
import { Link } from 'react-router-dom';

 

const ItemListJogos = ({ title, items, itemsArray, path, idPath }) => {
    // console.log(title);

    return (
    <div className="item-list-jogos">
        <div className="item-list-jogos-header">
            <div className="main__texts">
            <h2>{title} Populares</h2>
            <Link to={path} className="main__link" href={path}>Mostrar Tudo</Link>
            </div>    
        </div>
        <div className="item-list-jogos__container">
            {itemsArray.filter((currentValue, index) => index < items).map((currObj, index) => 
            (<SingleItemJogos 
                idPath={idPath}
                {...currObj}
            
            key={`${title}-${index}`} />))}
        </div>      
    </div>
    );
}

export default ItemListJogos;
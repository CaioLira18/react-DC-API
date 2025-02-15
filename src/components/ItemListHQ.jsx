import React from 'react'
import SingleItemNoticias from './SingleItemNoticias';
import { Link } from 'react-router-dom';
import SingleItemHQ from './SingleItemHQ';
 

const ItemListHQ = ({ title, items, itemsArray, path, idPath }) => {
    // console.log(title);

    return (
    <div className="item-list">
        <div className="item-list-header">
            <div className="main__texts">
            <h2>{title} Populares</h2>
            <Link to={path} className="main__link" href={path}>Mostrar Tudo</Link>
            </div>    
        </div>
        <div className="item-list-HQ__container">
            {itemsArray.filter((currentValue, index) => index < items).map((currObj, index) => 
            (<SingleItemHQ 
                idPath={idPath}
                {...currObj}
            
            key={`${title}-${index}`} />))}
        </div>      
    </div>
    );
}

export default ItemListHQ;
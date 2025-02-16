import React from 'react'
import { Link } from 'react-router-dom';
import SingleItemHQ from './SingleItemHQ';
import SingleItemFilmes from './SingleItemFilmes';
 

const ItemListDcStudios = ({ title, items, itemsArray, path, idPath }) => {
    // console.log(title);

    return (
    <div className="item-list">
        <div className="item-list-header">
            <div className="main__texts">
            </div>    
        </div>
        <div className="item-list-HQ__container">
            {itemsArray.filter((currentValue, index) => index < items).map((currObj, index) => 
            (<SingleItemFilmes 
                idPath={idPath}
                {...currObj}
            
            key={`${title}-${index}`} />))}
        </div>      
    </div>
    );
}

export default ItemListDcStudios;
import React from 'react'
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';
import { avatarArray } from '../assets/database/avatar';
import SingleItemAvatar from './SingleItemAvatar';

 

const ItemListAvatar = ({ title, items, idPath}) => {
   
    return (
    <div className="item-list">
        <div className="item-list__container">
            {avatarArray.filter((currentValue, index) => index < items).map((currObj, index) => 
            (<SingleItemAvatar 
                idPath={idPath}
                {...currObj}
            
            key={`${title}-${index}`} />))}
        </div>      
    </div>
    );
}

export default ItemListAvatar;
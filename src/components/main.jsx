import React from "react";
import ItemList from "./ItemList";
import ItemListJogos from "./ItemListJogos";
import ItemListNoticias from "./ItemListNoticias";
import { heroesArray } from "../assets/database/heroes";
import { jogosArray } from "../assets/database/games";
import { newsArray } from "../assets/database/news";

const Main = ({ type }) => {
    return (
        <div className="main">
            {/* Item List de Heróis  */}
            {type === "Heróis" || type === undefined ? (
                <ItemList 
                    title="Heróis" 
                    items={heroesArray.length} 
                    itemsArray={heroesArray} 
                    path='/hero' 
                    idPath="/Herois"
                />
            ) : <></>}

            {/* Item List de Jogos */}
            {type === "Jogos" || type === undefined ? (
                <ItemListJogos 
                    title="Jogos" 
                    items={jogosArray.length} 
                    itemsArray={jogosArray} 
                    path='/jogos' 
                    idPath="/Jogos"
                />
            ) : <></>}

            {/* Item List de Notícias */}
            {type === "Notícias" || type === undefined ? (
                <ItemListNoticias 
                    title="Notícias" 
                    items={newsArray.length} 
                    itemsArray={newsArray} 
                    path='/noticias' 
                    idPath="/Noticias"
                />
            ) : <></>}
        </div>
    );
};

export default Main;

import React from "react";
import ItemList from "./ItemList";
import ItemListJogos from "./ItemListJogos";
import ItemListNoticias from "./ItemListNoticias";
import ItemListDcStudios from "./ItemListDcStudios";
import ItemListHQ from "./ItemListHQ";
import { heroesArray } from "../assets/database/heroes";
import { jogosArray } from "../assets/database/games";
import { newsArray } from "../assets/database/news";
import { villainsArray } from "../assets/database/villains";
import { hqArray } from "../assets/database/hq";
import { filmesArray } from "../assets/database/filmes";
import DC_Studios from "./DC_Studios";
import { Link, useLocation } from "react-router-dom";

const Main = ({ type }) => {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "";

    return (
        <div className="main">
            {isHome}
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

            {isHome}
            {/* Item List de Vilões */}
            {type === "viloes" || type === undefined ? (
                <ItemList 
                    title="Viloes" 
                    items={villainsArray.length} 
                    itemsArray={villainsArray} 
                    path='/viloes' 
                    idPath="/Viloes"
                />
            ) : <></>}

            {isHome}
            {/* Item List de Jogos */}
            {type ==="Jogos" || type === undefined ? (
                <ItemListJogos 
                    title="Jogos" 
                    items={jogosArray.length} 
                    itemsArray={jogosArray} 
                    path='/jogos' 
                    idPath="/Jogos"
                />
            ) : <></>}

            {isHome}
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
            {isHome}
             {/* Item List de HQ */}
             {type === "HQ" || type === undefined ? (
                <ItemListHQ
                    title="HQ" 
                    items={hqArray.length} 
                    itemsArray={hqArray} 
                    path='/HQs' 
                    idPath="/HQs"
                />
            ) : <></>}

            
             {isHome && <DC_Studios/>}
             {/* Item List de Filmes */}
             {type === "Filmes" || type === undefined ? (
                <ItemListDcStudios     
                    items={filmesArray.length} 
                    itemsArray={filmesArray} 
                    path='/Filmes' 
                    idPath="/Filmes"
                />
            ) : <></>}
        </div>
    );
};

export default Main;
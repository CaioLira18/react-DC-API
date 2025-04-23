import React from "react";
import { avatarArray } from "../assets/database/avatar";
import ItemListAvatar from "../components/ItemListAvatar";

const AvatarChoice = ({ type }) => {
  return (
      <div className="avatar-choice-container">
        <h1>Escolha Seu Avatar</h1>
        <div className="ArrayIcons">
        {(type === "avatar" || type === undefined) && (
            <ItemListAvatar 
                title="Avatar" 
                items={avatarArray.length} 
                itemsArray={avatarArray} 
                path='/avatar' 
                idPath="/Avatar"
            />
        )}
        </div>
        <div className="avatar-button">
            <button className="avatar-button-edit" type="submit">ALTERAR</button>
        </div>
      </div>
  );
}

export default AvatarChoice;
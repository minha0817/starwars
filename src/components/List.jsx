import React from "react";
import ListItem from "./ListItem";

export default function List (props) {

    const characters = props.characters;
    const characterListItem = characters.map((character, index) => {
        
        return (
            
            <ListItem 
    
                key = {index}
                name = {character.name}
            
            />
    
        )
    })

    return (

        <section>
            <h4>Characters</h4>
            <ul>
                {characterListItem}
            </ul>
        </section>

    )

}

import axios from "axios"
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"

export default function Detail(props) {
const { id } = useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div>
            <h1>DETAIL</h1>
            <h2>{character.name}</h2>
            <h3>Specie:{character.specie}</h3>
            <h3>Gender:{character.gender}</h3>
            <h3>Origin:{character.origin?.name}</h3>
            <img src={character.image} alt={character.name} /> 
        </div>
    )
}
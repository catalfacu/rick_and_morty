import axios from "axios"
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import styles from './Detail.module.css'

export default function Detail(props) {
const { id } = useParams();
const [character, setCharacter] = useState({});
const [imgview, setImgView] = useState(false);


useEffect(()=>{
   setTimeout(()=>{
      setImgView(true);
   },1990)
},[]);


useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div className={styles.contDetails}>
         <div className={styles.text}>
            <h1>DETAIL</h1>
            <h2>{character.name}</h2>
            <h3>Specie:{character.species}</h3>
            <h3>Gender:{character.gender}</h3>
            <h3>Origin:{character.origin?.name}</h3>
         </div>
            
            <div className={styles.image}>
              {imgview && <img src={character.image} alt={character.name}/>}
            </div> 
        </div>
    )
}
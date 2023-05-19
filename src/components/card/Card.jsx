import React from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={styles.cardStyle}> 
           <button 
               onClick={() => props.onClose(props.id)}
            >X</button>
            <Link to={ `/detail/${props.id}` }> <h2 className={styles.nameStyle}>{props.name}</h2>
            </Link>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
            <img src={props.image} alt={props.name}/>
            
      </div>
   );
}


            // {props.name}
            // {props.status}
            // {props.species}
            // {props.gender}
            // {props.origin}
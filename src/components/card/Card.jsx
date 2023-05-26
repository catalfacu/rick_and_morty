import React, { useState,useEffect } from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import {addFav, removeFav} from '../../redux/actions'
import { connect } from "react-redux";

 function Card(props) {       //props{addFav:f(character), removeFav:f(id)}
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      
      } else {
         setIsFav(true)
         props.addFav(props);
      }
   };
   
   return (
      <div className={styles.cardStyle}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

           <button 
               onClick={() => props.onClose(props.id)}
            >X</button>
            <Link to={ `/detail/${props.id}` }> 
            <h2 className={styles.nameStyle}>{props.name}</h2>
            </Link>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
            <img src={props.image} alt={props.name}/>
            
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(Card);
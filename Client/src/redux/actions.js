import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./types";
import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios
            .post(endpoint, character)
            .then(({ data }) => {
            return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios
            .delete(endpoint)
            .then(({ data }) => {
            return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };
// export const addFav = (character) => ({
//     type: ADD_FAV,
//     payload: character
// });

// export const removeFav = (id) => ({
//     type: REMOVE_FAV,
//     payload: id
// });

export const filterCards = (gender) => ({
    type:FILTER,
    payload:gender
});

export const orderCards = (orden) => ({
    type: ORDER,
    payload: orden
});
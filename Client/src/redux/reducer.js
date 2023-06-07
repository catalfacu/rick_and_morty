import { ADD_FAV, ERROR, FILTER, ORDER, REMOVE_FAV } from "./types";


const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: false
};

export const reducerFavList = (state=initialState, action) => {
    switch(action.type) {
        
        case ADD_FAV:
      return { ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload,
            errors: false 
        };

        case REMOVE_FAV:
      return { ...state, 
            myFavorites: action.payload, 
            errors: false 
        };

        case ERROR:
            return {
                ...state, errors: action.payload
            };
        
        case FILTER:
            if(action.payload === 'All') return {...state, myFavorites: state.allCharacters};

            let copyCharacters = state.allCharacters.filter(char=> char.gender === action.payload);
            return {
                ...state,
                myFavorites: copyCharacters
            };

        case ORDER:
            const copyCharacters2= state.allCharacters.sort((a,b)=>{        
                if(action.payload === "A") {
                    return a.id - b.id;

                } else if (action.payload === "D") {
                    return b.id - a.id;

                }
            });

            return {
                ...state,
                myFavorites: copyCharacters2
            };

        default:
            return {...state};
    }
};
import React, {useState} from 'react';
import './App.css';
import Cards from './components/cards/Cards'
import Nav from "./components/nav/Nav"
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([]);
  const example= { 
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };
  
   const onSearch = id =>  {  //copiar axios
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters= {characters} onClose={onClose}/>
      </div>
   );
}      

export default App;

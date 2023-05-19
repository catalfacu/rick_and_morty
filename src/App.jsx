import React, {useState} from 'react'
import axios from 'axios'
import './App.css'
import Nav from "./components/nav/Nav"
import Cards from './components/cards/Cards'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import { Routes, Route } from 'react-router-dom'

function App() {
   const [characters, setCharacters] = useState([]);
  
   const onSearch = id =>  {
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
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={ <Cards characters= {characters} onClose={onClose}/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/detail/:id" element= { <Detail/> }/>
         </Routes>

      </div>
   );
}      

export default App;

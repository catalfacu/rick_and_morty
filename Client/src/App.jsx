import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'
import Form from './components/form/Form'
import Nav from "./components/nav/Nav"
import Cards from './components/cards/Cards'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Favorites from './components/favorites/Favorites'

function App() {

//* LOGIN Y LOG OUT
   const [access, setAccess] = useState(false);
   
   const EMAIL = "cataldof21@gmail.com"
   const PASSWORD = "1234567"
   
   const navigate = useNavigate();
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   function logOut() {
      setAccess(false);
      navigate("/");
   };
   
   useEffect(() => {
      !access && navigate('/');  //*mientras access sea false la pagina se queda en "/"
   }, [access]);

   
//?AGREGAR CHARACTERS PARA RENDERIZAR EN HOME
   const [characters, setCharacters] = useState([]);
   
   const onSearch = id =>  {
      //evitar repetidos
      const characterId = characters.filter(character=>character.id === Number(id));
      console.log(characterId);
      if(characterId.length) return alert("El personaje ya esta en la lista");

      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

// TODO: ELIMINAR CARD DE HOME

   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== Number(id)))
   };

   const location = useLocation();

   return (
      <div className='App'>
         {
         location.pathname !== "/" &&
            <Nav onSearch={onSearch} logOut={logOut}/>
         }
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={ <Cards characters= {characters} onClose={onClose}/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/detail/:id" element= { <Detail/> }/>
            <Route path="/favorites" element={<Favorites/>}/>
         </Routes>

      </div>
   );
}      

export default App;

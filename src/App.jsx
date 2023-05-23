import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'
import Form from './components/form/Form'
import Nav from "./components/nav/Nav"
import Cards from './components/cards/Cards'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

function App() {
   
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
   
   useEffect(() => {
      !access && navigate('/');  //*mientras access sea false la pagina se queda en "/"
   }, [access]);
   
   
   const [characters, setCharacters] = useState([]);
   
   const onSearch = id =>  {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const isDuplicate = characters.some((char) => char.id === data.id);
            if(isDuplicate) {
               window.alert('¡El personaje ya está en la lista!');
             } else {
                setCharacters((oldChars) => [...oldChars, data]);
             }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== Number(id)))
   };

   const location = useLocation();

   return (
      <div className='App'>
         {
         location.pathname !== "/" &&
            <Nav onSearch={onSearch}/>
         }
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={ <Cards characters= {characters} onClose={onClose}/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/detail/:id" element= { <Detail/> }/>
         </Routes>

      </div>
   );
}      

export default App;

import { useState } from 'react';
import styles from './Search.module.css'

export default function SearchBar(props) {
   const [id,setId] = useState("");

   const handleChange = e => {
      const {value} = e.target;
      setId(value);
      console.log("id: " , id);
   }

   const cleanInput = (event) => {
      props.onSearch(id);
      setId(" ");
   };

   return (
      <div className={styles.contSearch}>
          <input 
          placeholder= 'ID del personaje...'
          type='text'
          name='search' 
          id='search'
          value={id}
          onChange={handleChange} />
         <button onClick={() => cleanInput()}>Agregar</button>
      </div>
   );
}


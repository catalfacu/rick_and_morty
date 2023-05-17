import { useState } from 'react';
import styles from './Search.module.css'

export default function SearchBar(props) {
   const [id,setId] = useState("");

   const handleChange = e => {
      const {value} = e.target;
      setId(value);
   }
   return (
      <div className={styles.contSearch}>
          <input 
          className={styles.input} 
          type='text'
          name='search' 
          id='search' 
          onChange={handleChange} />
         <button className={styles.buttonAdd} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}


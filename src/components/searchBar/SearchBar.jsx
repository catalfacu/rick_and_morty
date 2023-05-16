import styles from './Search.module.css'

export default function SearchBar(props) {
   return (
      <div className={styles.contSearch}>
          <input className={styles.input} type='search' />
         <button className={styles.buttonAdd} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}


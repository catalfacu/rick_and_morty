import React from 'react'
import styles from './Nav.module.css'
import SearchBar from "../searchBar/SearchBar"

export default function Nav(props) {
    return (
        <div className={styles.divNav}>
       <SearchBar onSearch={props.onSearch}/>
       </div>
    )
}
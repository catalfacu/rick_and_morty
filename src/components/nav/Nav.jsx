import React from 'react'
import styles from './Nav.module.css'
import SearchBar from "../searchBar/SearchBar"
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
    return (
        <div className={styles.divNav}>
             
            
            <NavLink to="/home">
                <button className={styles.home}>Home</button>    
            </NavLink>
        <SearchBar onSearch={props.onSearch}/>        
            <NavLink to="/about">
                <button className={styles.about}>About</button>
            </NavLink>
            
           
       </div>
    )
}
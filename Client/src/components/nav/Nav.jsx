import React from 'react'
import styles from './Nav.module.css'
import SearchBar from "../searchBar/SearchBar"
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
    return (
        <div className={styles.divNav}>
                 
        <NavLink to="/home">
            <button className={styles.botonNav}>Home</button>    
        </NavLink>
        
        <NavLink to="/favorites">
                <button className={styles.botonNav}>Favorites</button>
            </NavLink>
        
        <NavLink to="/about">
            <button className={styles.botonNav}>About</button>
        </NavLink>
        
        <SearchBar onSearch={props.onSearch}/>        
        
        <button onClick={props.logOut}>Log Out</button>
       
       </div>
    )
}
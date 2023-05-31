import React from "react"
import styles from './About.module.css'


export default function About(props) {
    return (
        <div className={styles.aboutContainer}>
            <h1>CREATED BY:</h1>
            <h1>FACUNDO CATALDO</h1>
            <hr/>
            <h3>About me:</h3>
            <a href="https://www.instagram.com/facucata23/?hl=es-la" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/in/facundo-cataldo-9a0031272/" target="_blank">Linkedin</a>
            <a href="https://github.com/catalfacu" target="_blank">Github</a>
            <a href="https://www.facebook.com/facu.cataldo.9" target="_blank">Facebook</a>
        </div>
    )
}
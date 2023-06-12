import React, { useEffect, useState } from "react"
import styles from './About.module.css'


export default function About(props) {

  const { aboutView, setAboutView} = useState(false);

  useEffect(()=> {
    setTimeout(()=> {
      setAboutView(true);
    },0o500)
  },[]);

  return (
    <div className={styles.aboutContainer}>
        <div className={styles.text}>
            <h1>CREATED BY:</h1>
            <h1>FACUNDO CATALDO</h1> 
            <h3>About me:</h3>
        </div>
      <div className={styles.imagen}><img src="\src\assets\Logos para el about\Diseñosintítulo.png" alt="mifoto" /></div>


    <div className={styles.linksStyle}>
       
      <a href="https://www.instagram.com/facucata23/?hl=es-la" target="_blank">
        <img
          src="src\assets\Logos para el about\instagram-2.png"
          alt="instagram"
        />
      </a>
      
      <a
        href="https://www.linkedin.com/in/facundo-cataldo-9a0031272/"
        target="_blank"
      >
        <img
          src="src\assets\Logos para el about\linkedin.png"
          alt="linkedin"
        />

      </a>
      <a href="https://github.com/catalfacu" target="_blank">
      <img
          src="src\assets\Logos para el about\github-2.png"
          alt="github"
        />

      </a>

      <a href="https://www.facebook.com/facu.cataldo.9" target="_blank">
      <img
          src="src\assets\Logos para el about\facebook-2.png"
          alt="facebook"
        />
      </a>

    </div>
      
    </div>
  );
}
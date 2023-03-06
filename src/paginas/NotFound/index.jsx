import React from 'react'
import styles from "./NotFound.module.css"
import error404 from "assets/erro_404.png"
import Button from 'componentes/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navegar =useNavigate()
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>
          404
        </span>
        <h1 className={styles.titulo}>
          Ops! Page not found
        </h1>
        <p className={styles.paragrafo}>
          Are you sure that was what you were looking for?
        </p>

        <p className={styles.paragrafo}>
          Wait a bit, refresh the page and try again
        </p>  

        <div 
          className={styles.botaoContainer}
          onClick={()=> navegar(-1)}
        >
          <Button tamanho='lg'>Previous</Button>
        </div>

        <img 
          className={styles.imagemCachorro}
          src={error404}
          alt="Cachorro" />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
    
  )
}

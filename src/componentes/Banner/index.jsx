import React from 'react'
import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"

import minhaFoto from "assets/minha_foto.jpg"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>

        <h1 className={styles.titulo}>
          CV Matheus Sasso
        </h1>
        <p className={styles.paragrafo}>

          Bem vindo ao meu Curriculo
        </p>

      </div>

      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          className={styles.circuloColorido}
          aria-hidden={true}
          alt=""
        />

        <img
          src={minhaFoto}
          className={styles.minhaFoto}
          alt="Minha foto" 
        />
      </div>
    </div>
  )
}

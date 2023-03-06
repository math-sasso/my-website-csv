import styles from "./Button.module.css"

import React from 'react'

export default function Button({children, tamanho}) {
  return (
    <button 
    className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}> 
        {children}
    
    </button>
  )
}

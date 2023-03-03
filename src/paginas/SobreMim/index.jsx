import PostModelo from 'componentes/PostModelo'
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobeMim from "assets/sobre_mim_foto.jpg"
import styles from "./SobreMim.module.css"
import React from 'react'

export default function SobreMim() {
  return (

    <PostModelo
      titulo="Sobre mim"
      fotoCapa={fotoCapa}
    >

      <h3 className={styles.subtitulo}>
        Hello, my name is Matheus!
      </h3>

      <img src={fotoSobeMim} className={styles.fotoSobreMim} alt="Minha foto" />

      <p className={styles.paragrafo}>
      Matheus Sasso is a highly skilled Machine Learning Engineer with extensive experience in Natural Language Processing (NLP) and Computer Vision. He has a passion for using data-driven solutions to solve complex problems, and has dedicated his career to advancing the field of machine learning through his work.
      </p>

      <p className={styles.paragrafo}>
      Matheus has a strong academic background, having earned a degree in Computer Science or a related field. He has also continued his education through professional development courses and workshops to stay current with the latest developments in machine learning.
      </p>

      <p className={styles.paragrafo}>
        Throughout his career, Matheus has worked on a wide range of projects, from academic research to industry applications. His expertise in NLP has allowed him to develop models for text classification, sentiment analysis, and entity recognition. He has also worked on projects that involve speech recognition and speech synthesis.
      </p>

      <p className={styles.paragrafo}>
        In addition to NLP, Matheus has experience in Computer Vision, with a focus on image and video processing. He has developed and implemented machine learning models for object detection, segmentation, and tracking. Matheus has a strong understanding of the popular deep learning frameworks such as TensorFlow and PyTorch, and is skilled in using programming languages such as Python and R.
      </p>

      <p className={styles.paragrafo}>
        Matheus has a deep understanding of the machine learning workflow, from data preprocessing and feature engineering to model selection and performance evaluation. He has experience with various machine learning algorithms, including supervised, unsupervised, and reinforcement learning.
      </p>

      <p className={styles.paragrafo}>
        Matheus is a highly collaborative team member, working closely with stakeholders and other engineers to deliver high-quality machine learning solutions. He is also skilled in project management, ensuring that projects are delivered on time and within budget.
      </p>

      <p className={styles.paragrafo}> 
        Overall, Matheus Sasso is an exceptional Machine Learning Engineer with a strong academic background and extensive experience in NLP and Computer Vision. His passion for using machine learning to solve complex problems has led him to develop a wide range of skills and expertise, making him a valuable asset to any team.
      </p>
    </PostModelo>

  )



}
import Image from 'next/image'
import { useState } from "react"
import styles from "./index.module.css"

export function Modal(props) {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);

  return(
    <>
      <div className={`${styles.overlay}`} onClick={props.handleClickedModalClose}>
      </div>
        <div className={`${styles.content} card`}>
          <div className={styles.title}>
            <h2>{props.content.title}</h2>
          </div>
          <div className={styles.thumb}>
            {props.content.thumb.map((img, index) => (
              <Image
                key={index.toString()}
                className={styles.thumbImages}
                src={img}
                alt="images"
                width={75}
                height={75}
                onClick={()=>setDisplayedImageIndex(index)}
              />
            ))}
          </div>
          <div className={styles.description}>
            {props.content.description.split('\n').map((line,ind) => (
              <div key={ind} className={`${styles.description__line}`}>
                <span className={`lighterColor`}>{line}</span>
              </div>
            ))}
          </div>
          <div className={styles.image}>
            <Image
              className={styles.mainImage}
              src={props.content.thumb[displayedImageIndex]}
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.links}>
            <h2>LINKS</h2>
            <ul className={styles.links__list}>
              {Object.keys(props.content.links).map((key) => (
                <li key={key} className={styles.links__item}>
                  <span>- </span>
                  <a href={props.content.links[key].url} target="_blank" rel="noopener noreferrer">
                    {props.content.links[key].label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.grid__lang}>
            <h2>使用技術など</h2>
            <ul className={styles.lang__list}>
              {Object.keys(props.content.langImg).map((key) => (
                <li className={`${styles.lang__items}`} key={key}>
                  <Image
                    key={key}
                    className={`logoBigger ${styles.langImages}`}
                    src={props.content.langImg[key]}
                    alt={key}
                    width={40}
                    height={40}
                  />
                </li>
              ))}
            </ul>
          </div>
      </div>
    </>
  )
}
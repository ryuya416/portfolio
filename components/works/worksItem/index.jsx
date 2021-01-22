import Image from 'next/image'
import styles from './index.module.css'
import React, { useState, useCallback } from 'react';
import { Modal } from '../../modal'

export function WorksItem(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickedModalOpen = () => {
    setModalOpen(true);
  }

  const handleClickedModalClose = useCallback(() => {
    setModalOpen(false);
  },[modalOpen]);

  return (
    <div className={` ${styles.items__list}`}>
      <Image
        className={styles.items__image}
        src={props.content.thumb[0]}
        alt={props.content.title}
        width={400}
        height={400}
        onClick={()=>handleClickedModalOpen()}
      />
      <h2 className={`lighterColor`}>{props.content.title}</h2>
      {modalOpen &&
        <Modal
          content={props.content}
          handleClickedModalClose={handleClickedModalClose}
        />}
    </div>
  )   
}
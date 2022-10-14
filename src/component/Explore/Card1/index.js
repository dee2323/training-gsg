import React from 'react'
import Card2 from '../Card2';
import styles from "./style.module.css"


const Card1 = ({children}) => {
  return (
      <div className={styles.cardContainer}>
          <Card2 date="19 January, 2017" />
          {children}
    </div>
  )
}

export default Card1;
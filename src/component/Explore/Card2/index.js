import React from 'react'
import styles from './style.module.css'

const Card2 = (props) => {
  return (
    <div className={styles.description}>
        <p>fieldtested &#183; {props.date}</p>
    </div>
  )
}

export default Card2;
import React from 'react'
import style from './style.module.css'

const Container = ({children}) => {
  return (
    <div class={style.container}>
    {children}
    </div>
  )
}

export default Container

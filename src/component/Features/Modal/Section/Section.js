import React from 'react'
import style from './style.module.css'
const Section = () => {
  return (
    <div className={style.section}>
    <p>Partnership <span>Partnership</span></p>
    <hr  style={{width:'96%',margin:"auto",marginTop:"-6px"}}/>
    <p>Partnership <span className={style.nextSpan}>Randall Armstrong</span></p>
    <hr  style={{width:'96%',margin:"auto",marginTop:"-6px"}}/>
    <p>Partnership <span className={style.nextSpan}>Augusta Mendoza</span></p>
    <hr  style={{width:'96%',margin:"auto",marginTop:"-6px"}}/>
    </div>
  )
}

export default Section

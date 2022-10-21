import React from 'react'
import style from './style.module.css'
const SideImages = ({images}) => {
    const ListImages=images.map(item=>{
        console.log(item)
        return(<img src={item} alt='' />)});
  return (
    <div className={style.col1}>
    {ListImages}
    </div>
  )
}

export default SideImages

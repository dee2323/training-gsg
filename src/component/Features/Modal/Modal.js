import React,{useState,useEffect} from 'react'
import Modal from 'react-modal'
import style from './style.module.css'
import axios from 'axios'

const PopUp = ({show,products,index}) => {
    const [isOpen,setIsOpen]=useState(false)
    const [close,setClose]=useState(true)
    
    return (
    <div>
      {close&&show&&<button className={style.btn} onClick={()=>setIsOpen(true)} >QUICK VIEW</button>}
      <Modal isOpen={isOpen} onRequestClose={()=>{setIsOpen(false); setClose(false)}}>
      
      <h2>{products.description}</h2>
      <p>paragraph</p>
      </Modal>
    </div>
  )
} 

export default PopUp

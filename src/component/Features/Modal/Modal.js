import React,{useState} from 'react'
import Modal from 'react-modal'
import style from './style.module.css'

import Size from './Size/Size'

import MainImage from './MainImage/MainImage'
import SideImages from './SideImages/SideImages'
import Description from './Description/Description'

import Section from './Section/Section'
import Price from './Price/Price'
import Quantity from './Quantity/Quantity'

const PopUp = ({show,products,index}) => {
    const [isOpen,setIsOpen]=useState(false)
    const [close,setClose]=useState(true)
    const {images}=products;
    return (
    <div>
      {show&&<button className={style.btn} onClick={()=>setIsOpen(true)} >QUICK VIEW</button>}
      <Modal style={{
        overlay:{
          backgroundColor:'#d0d0d0d0'
        },
        content:{
        width:"78%",
        margin:'auto'
      }}} isOpen={isOpen} onRequestClose={()=>{setIsOpen(false); setClose(false)}}>
      
      <h3 className={style.header}>The Sideswept Dhoti  <button  onClick={()=>{setIsOpen(false); setClose(false)}}>x</button></h3>
      <hr  />
      <div className={style.modalContainer} >
      <SideImages images={images} />

      <MainImage image={products.images[1]} />
      <div className={style.col3}>  
      <h3>{products.title}</h3>
      <Price price={products.price}/>
      
      <Description description={products.description} />
    <Section />
      <Size />
      <Quantity products={products} />
      </div> 
      </div>
      </Modal>
    </div>
  )
} 

export default PopUp

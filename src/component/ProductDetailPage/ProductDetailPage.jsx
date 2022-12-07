import React from 'react'
import Description from '../Features/Modal/Description/Description'
import MainImage from '../Features/Modal/MainImage/MainImage'
import Price from '../Features/Modal/Price/Price'
import SideImages from '../Features/Modal/SideImages/SideImages'
import HeaderSection from './HeaderSection/HeaderSection'
import Quantity from '../Features/Modal/Quantity/Quantity'
import Section from '../Features/Modal/Section/Section'
import Size from '../Features/Modal/Size/Size'
import style from '../Features/Modal/style.module.css'
import {data} from './response'
const ProductDetailPage = ({products}) => {
  const {images}=products;
return (
   <>
   <HeaderSection />
    
    <h3 className={style.header}>The Sideswept Dhoti</h3>
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
    
   </>
)
}

export default ProductDetailPage

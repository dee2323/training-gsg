import React from 'react'
import HeaderSection from './HeaderSection/HeaderSection'
import s from './style.module.css'
import {data} from './response'
import RecommandationSection from './RecommandationSection/RecommandationSection'
import ParagraphSection from './ParagraphSection/ParagraphSection'
import CardSection from './CardSection/CardSection'
import Footer from '../Footer/Footer'
import Review from './Review/Review'
import ShowSection from './ShowSection/ShowSection'




const products=data.products[1]
const ProductDetailPage = () => {
  const {images}=products;
return (
   <>
   <HeaderSection />
   <ShowSection products={products} images={images} />
    <div className={s.ImageSection}>
deema
    </div>
    
    <ParagraphSection />
   <CardSection images={images} />
   <div className={s.pContainer}> 
        <ParagraphSection /></div>
        <Review />
        <RecommandationSection />
        <Footer />
        
   </>
)
}

export default ProductDetailPage

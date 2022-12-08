import React from 'react'
import HeaderSection from './HeaderSection/HeaderSection'
import s from './style.module.css'
import RecommandationSection from './RecommandationSection/RecommandationSection'
import ParagraphSection from './ParagraphSection/ParagraphSection'
import CardSection from './CardSection/CardSection'
import Review from './Review/Review'
import ShowSection from './ShowSection/ShowSection'
import { useLocation } from 'react-router-dom';
const ProductDetailPage = () => {
   const location = useLocation();
    const state = location.state;
    console.log(state,'sss');
    const {products}=state;
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
        
   </>
)
}

export default ProductDetailPage

import React from "react";
import StarRating from "../../reusedComponent/StarRating/StarRating";
import style from './style.module.css'
const Review =()=>{
    return <>
    <h2 style={{marginBottom:'-2rem'}}>Customer Reviews</h2>
    <div className={style.container}>
       <div className={style.firstRow}>
       <StarRating />
       <button className={style.btn}>Write a review</button> </div>
       <p className={style.para}>Top Customers Reviews<br />
       <StarRating /><br /><br />
       Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses or contacts. What part of the eye is it that may be causing all your vision trouble? Your cornea! When the shape of your cornea is irregular, the image on your retina is blurry and out-of-focus. The cornea is a part of your eye that works to focus light and projects an image on the retina. This focusing of light is called refraction. The 3 main types of refractive errors are myopia (nearsightedness), hyperopia (farsightedness) and astigmatism. 
      <br /><br />
      <span style={{color:'#FF5E1B'}}>Show more reviews</span>
       </p>

    </div>
    </>
}
export default Review;
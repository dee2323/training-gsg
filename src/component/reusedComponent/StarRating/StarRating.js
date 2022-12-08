import React,{useState} from "react";
import {Rating} from 'react-simple-star-rating'
const StarRating=()=>{
    const [rating, setRating] = useState(3) 

  const handleRating = () => {
    setRating(3)}

return(<>
    <Rating
    emptyColor={'#f1a545'} 
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        className='foo'
        
      />
    
      </>
   
)
}

export default StarRating
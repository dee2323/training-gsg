import React, { useContext } from "react";
import { productContext } from "../../../context/productContext";
import './style.css'
const Product = ({ images, title, id }) => {
    const { deleteFromWish } = useContext(productContext)
    return (

        <div className='product'>
            <img src={images[1]} alt="" />
            <p className="cart-title">{title}</p>


            <p style={{ cursor: 'pointer' }} onClick={() => { deleteFromWish(id) }} >remove</p>
        </div>
    )
}
export default Product;
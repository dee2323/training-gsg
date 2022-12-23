import React, { useContext } from "react";
import { productContext } from "../../../context/productContext";
import './style.css'
const Product = ({ images, title, price, id, count }) => {
    const { deleteFromCart, addToCount, decreaseCount } = useContext(productContext)
    return (

        <div className='product'>
            <img src={images[1]} alt="" />
            <p className="cart-title">{title}</p>
            <p className='cart-price'>${count * price}</p>
            <div className="quntity-container">
                <span className='oparation' onClick={() => decreaseCount(id)}>-</span>
                <span style={{ display: 'inline-block', width: '3.4rem' }}>{count}</span>
                <span className='oparation' onClick={() => addToCount(id)}>+</span>


            </div>
            <p style={{ cursor: 'pointer' }} onClick={() => deleteFromCart(id)} >remove</p>
        </div>
    )
}
export default Product;
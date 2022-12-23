import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { productContext } from '../../context/productContext';
import Empty from './Empty/Empty'
import Product from './Product/Product';
import './style.css'

const Cart = () => {
    const { cartProducts } = useContext(productContext)
    const totalPrice = cartProducts.reduce((total, num) => {
        return total + num.count * num.price;
    }, 0);

    const listProducts = cartProducts.length > 0 ? cartProducts.map(item => <Product key={item.id}   {...item} />) : <Empty />
    return (
        <div className='outer-container'>

            {listProducts}
            {cartProducts.length > 0 &&
                <div className='total-price' >Total price: ${totalPrice}</div>


            }

        </div>)
}
export default Cart;
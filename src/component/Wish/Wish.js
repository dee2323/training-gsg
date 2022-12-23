import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { productContext } from '../../context/productContext';
import Empty from './Empty/Empty'
import Product from './Product/Product';
import './style.css'

const Wish = () => {
    const { wishProducts } = useContext(productContext)


    const listProducts = wishProducts.length > 0 ? wishProducts.map(item => <Product key={item.id}   {...item} />) : <Empty />
    return (
        <div className='outer-container'>

            {listProducts}


        </div>)
}
export default Wish;
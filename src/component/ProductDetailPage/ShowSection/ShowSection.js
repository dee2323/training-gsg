import React, { useContext } from "react";
import s from './style.module.css'
import Quantity from '../../Features/Modal/Quantity/Quantity'
import Section from '../../Features/Modal/Section/Section'
import Size from '../../Features/Modal/Size/Size'
import style from '../../Features/Modal/style.module.css'
import Description from '../../Features/Modal/Description/Description'
import MainImage from '../../Features/Modal/MainImage/MainImage'
import Price from '../../Features/Modal/Price/Price'
import SideImages from '../../Features/Modal/SideImages/SideImages'
import { productContext } from "../../../context/productContext";
const ShowSection = ({ products, images }) => {
    const { addToCart, addToWish } = useContext(productContext)
    return (

        <div className={s.Container}>
            <div className={style.modalContainer} >
                <SideImages images={images} />
                <MainImage image={products.images[1]} />
                <div className={style.col3}>
                    <h3>{products.title}</h3>
                    <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                        <Price price={products.price} /></div>
                    <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                        <Description description={products.description} /></div>
                    <Section />
                    <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
                        <Size /></div>
                    <Quantity products={products} />
                    <button onClick={() => addToCart(products.id)} style={{ backgroundColor: 'rgba(51, 51, 58, 1)', color: '#fff', padding: '12px', marginLeft: '7rem', outline: 'none', border: 'none' }}>Add to cart</button>
                    <button onClick={() => addToWish(products.id)} style={{ backgroundColor: 'rgba(51, 51, 58, 1)', color: '#fff', padding: '12px', marginLeft: '7rem', outline: 'none', border: 'none' }}>Add to wishlist</button>
                    <br />
                    <br />
                    <p className={s.p}>Features</p>
                    <p className={s.p}>Fabric Care</p>
                </div>
            </div>
        </div>)
}
export default ShowSection;
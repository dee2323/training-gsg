import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const productContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([])
    const [wishProducts, setWishProducts] = useState([])
    useEffect(() => {
        axios(
            'https://dummyjson.com/products',
        ).then(res => {
            setProducts(res.data.products)
        }
        );
    }, []);
    const count = cartProducts.length;
    const addToCart = (id) => {
        const newProduct = products.find(item => item.id === id)
        let count = 0
        cartProducts.filter(item => {
            if (item.id === id) {
                count++;
            }
        })

        if (count === 0)
            setCartProducts([...cartProducts, { ...newProduct, count: 1 }])
        else {
            setCartProducts(cartProducts.map(item => {
                if (item.id === id) return { ...item, count: item.count + 1 }
                return item
            }))
        }

    }
    const addToWish = (id) => {
        const newProduct = products.find(item => item.id === id)
        let count = 0
        wishProducts.filter(item => {
            if (item.id === id) {
                count++;
            }
        })

        if (count === 0)
            setWishProducts([...wishProducts, { ...newProduct }])
        else {
            setCartProducts([...wishProducts])
        }

    }
    const deleteFromCart = (id) => {
        setCartProducts(cartProducts.filter(item => item.id !== id))
    }
    const deleteFromWish = (id) => {
        setWishProducts(wishProducts.filter(item => item.id !== id))
    }
    const addToCount = (id) => {
        setCartProducts(cartProducts.map(item => item.id !== id ? item : { ...item, count: item.count + 1 }))
    }
    const decreaseCount = (id) => {
        const item = cartProducts.find(item => item.id === id)
        if (item.count - 1 > 0)
            setCartProducts(cartProducts.map(item => item.id !== id ? item : { ...item, count: item.count - 1 }))
        else
            deleteFromCart(id)

    }
    const restTheCart = () => setCartProducts([])

    return <productContext.Provider value={{
        count, products, cartProducts, addToWish, wishProducts, deleteFromWish,
        deleteFromCart, addToCart, restTheCart, decreaseCount, addToCount
    }}>{children}</productContext.Provider>
}
export default ProductProvider
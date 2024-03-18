import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const exist = isInCart(item.id)

        if (exist === true) {
            let newArray = cart.map((elemento) => {

                if (elemento.id === item.id) {
                    return { ...elemento, quantity: item.quantity }

                } else {
                    return elemento
                }
            })
            setCart(newArray)
        } else {
            setCart([...cart, item])
        }

    }

    const clearCart = () => {
        setCart([])
    }

    const deleteById = (id) => {

        const cartFilter = cart.filter((elemento) => elemento.id !== id)
        console.log(cartFilter)
        setCart(cartFilter)
    }

    const isInCart = (id) => {
        const exist = cart.some((elemento) => elemento.id === id)
        return exist
    }

    const getTotalPrice = () =>{
        let total = cart.reduce((acc,elemento)=>{
            return acc + (elemento.price * elemento.quantity)
        },0)
        return total
    }

    const getTotalQuantity = () =>{
        let total = cart.reduce((acc,elemento)=>{
            return acc + elemento.quantity
        },0)
        return total
    }

    const getQuantityById = (id) =>{
        
        const product = cart.find((elemento)=> elemento.id === id)
        return product?.quantity
    }


    let data = {
        cart,
        addToCart,
        clearCart,
        deleteById,
        isInCart,
        getTotalPrice,
        getTotalQuantity,
        getQuantityById
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider
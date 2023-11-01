import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    )

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantity += 1
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider value={{ addCart, removeCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}

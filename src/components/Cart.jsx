import { useContext } from 'react'
import { CartContext } from '../CartContext'

export default function Cart() {
  const { cart, removeCart } = useContext(CartContext)

  return (
    <div className="cart">
      <h2>Carrito</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.quantity}
            <button onClick={() => removeCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

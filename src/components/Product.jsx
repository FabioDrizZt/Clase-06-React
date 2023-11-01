import { useContext } from 'react'
import { CartContext } from '../CartContext'

export default function Product({ product }) {
  const { addCart } = useContext(CartContext)

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addCart(product)}> Agregar al carrito </button>
    </div>
  )
}

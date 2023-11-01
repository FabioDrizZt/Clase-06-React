import './App.css'
import Cart from './components/Cart'
import Product from './components/Product'
import { CartProvider } from './CartContext'

function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 }
  ]

  return (
    <CartProvider>
      <div className="App">
        <div className="products">
          <h1>e-commerce 🛒</h1>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  )
}

export default App

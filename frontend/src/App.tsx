import './App.css'
import { sampleProducts } from './data'

function App() {
 
  return (
    <div>
      <header>TS Ecommerce</header>
      <main>
        {sampleProducts.map((product) => (
          <li key={product.slug}>
            <img
              className="product-image"
              src={product.image}
              alt="product.name"
            ></img>
            <h2>{product.name}</h2>
            <p>$ {product.price}</p>
          </li>
        ))}
      </main>
      <footer>@2025 All right reserved</footer>
    </div>
  )
}

export default App

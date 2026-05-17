import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  //Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  return (
    <div style ={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#333' }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDark={darkMode} onToggle={() => setDarkMode(!darkMode)} />

        <br /><br />

      {/* TODO: Implement category filter dropdown */}
      <label htmlFor="category-filter">Filter by Category: </label>
      
      <select id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>

        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">Non-Existent Category</option>
      </select>

      <ProductList selectedCategory={selectedCategory} addToCart={addToCart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;

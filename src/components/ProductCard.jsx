import React from 'react'
import styles from '../styles/ProductCard.module.css'
import ProductList from './ProductList'
import { useState } from 'react'

//onAddToCart fucntion as a prop
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
//Add onClick event to the button.
      <button 
        data-testid={'product-' + product.id} 
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
      >
        Add to Cart
        {product.inStock ? '' : ' (Out of Stock)'}
      </button>
    </div>
  )
}

export default ProductCard

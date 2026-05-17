import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
]

function ProductList({selectedCategory, addToCart}) {
  
   {/* TODO: Filter sample data using selected category */}
   const filteredProducts = sampleProducts.filter((product) => {
        if (selectedCategory === 'all') {
          return true;
        } else {
          return product.category.toLowerCase() === selectedCategory.toLowerCase();
        }
      });
    
      if (filteredProducts.length === 0) {
        return (
        <div>
          <h2>Available Products</h2>
          <p>No products available in this category.</p>
        </div>
      )};
};

export default ProductList;

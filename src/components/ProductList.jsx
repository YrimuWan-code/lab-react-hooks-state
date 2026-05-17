import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true },
]

function ProductList({selectedCategory, addToCart}) {
  
   {/* TODO: Filter sample data using selected category */}
   const filteredProducts = sampleProducts.filter((product) => {
        if (selectedCategory === 'all') {
          return true;
        } else {
          return product.category?.toLowerCase() === selectedCategory.toLowerCase();
        }
      });
   
      {/*if no products match the selected category, display a message 'No products available in this category.' */}
     
      if (filteredProducts.length === 0) {
        return <p>No products available in this category.</p>;
    
      }
        return (
        <div>
          <h2>Available Products</h2>
          <div>
            {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
        </div>
      )};

export default ProductList;

import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.50', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true }
]

function ProductList() {
  // State for tracking the selected category
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  //When the category changes, we need to update the selected category state
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }
   {/* TODO: Filter sample data using selected category */}
   const filteredProducts = sampleProducts.filter(function(product) {
        if (selectedCategory === 'all') {
          return true;
        } else {
          return product.category.toLowerCase() === selectedCategory.toLowerCase();
        }
      });

      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))};
return (
    <div>
      <h2>Available Products</h2>
    </div>
  );
};

export default ProductList;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Mock data for products
  const products = [
    { id: 1, name: 'Burger', image: 'burger.jpg', description: 'Delicious burger', price: 10 },
    { id: 2, name: 'Pizza', image: 'pizza.jpg', description: 'Hot & spicy pizza', price: 15 },
    { id: 3, name: 'Crispy Fries', image: 'fries.jpg', description: 'Crispy fries', price: 8 },
    { id: 4, name: 'Sweet Cakes', image: 'cake.jpg', description: 'Sweet cakes', price: 12 },
    { id: 5, name: 'Green Salad', image: 'green.jpg', description: 'Healthy green salad', price: 7 },
  ];

  // Apply filter and sort to the products
  const filteredAndSortedProducts = applyFiltersAndSort(products, filter, sortOption);

  return (
    <div>
      {/* Filter and Sort Section */}
      <div style={{ marginBottom: '2rem' }}>

        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6' style={{margin:'0.5rem'}}>
          <label>Filter by:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{borderRadius:"0.2rem"}}>
          <option value="">All</option>
          <option value="Burger">Burger</option>
          <option value="Pizza">Pizza</option>
          <option value="Crispy Fries">Fries</option>
          <option value="Cakes">Cakes</option>
          <option value="Green Salad">Green Salad</option>
        </select>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6' style={{margin:'0.5rem'}}>  <label style={{ marginLeft: '1rem' }}>Sort by:</label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} style={{borderRadius:"0.2rem"}}>
          <option value="">None</option>
          <option value="PriceLowToHigh">Price Low to High</option>
          <option value="PriceHighToLow">Price High to Low</option>
        </select></div>
        </div>
       

       
      </div>

      {/* Product Cards */}
      <div>
        {filteredAndSortedProducts.map((product) => (
          <div key={product.id} className="card lg:w-97 md:w-1/2 sm:w-full bg-base-100 shadow-xl" style={{ float: 'left', border: "0.05rem solid #F28705", marginBottom: "1rem" }}>
            <figure className="px-10 pt-10">
              <motion.img whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }} src={product.image} alt={product.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <div className="card-actions">
                <button className="btn" style={{ backgroundColor: "#F28705", color: "black", boxShadow: '3px 3px 3px 3px #F28705' }}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Function to apply filters and sort to the products
const applyFiltersAndSort = (products, filter, sortOption) => {
  let filteredProducts = products;

  if (filter) {
    filteredProducts = products.filter(product => product.name === filter);
  }

  if (sortOption === 'PriceLowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'PriceHighToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return filteredProducts;
};

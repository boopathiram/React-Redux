import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';
import './styles/productlist.css';
import { fetchProducts, filterByCategory, searchProducts } from "./actions/productActions";
 import product1Image from './assets/images/7502.jpg';

const App = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.filteredProducts);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Transport', label: 'Transport' },
    { value: 'Books', label: 'Books' },
    { value: 'beauty', label: 'Beauty & Personal Care' },
    { value: 'health', label: 'Health & Household' },
  ];

  


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchProducts(event.target.value));
  };

  const handleCategoryChanged = (selectedOption) => {
    console.log('Selected Category:', selectedOption);
    setCategory(selectedOption);
    dispatch(filterByCategory(selectedOption.value));
  };

  return (
    <div  >
      <div >
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
         className="large-input"
        onChange={handleSearchChange}
      />
       {/* </div>
      <div className="search-input" > */}
      <Select  className="search-input"  onChange={handleCategoryChanged} options={categories} value={category}  placeholder="Search and Select a Category"
        isSearchable= 'true' >
      </Select>
      </div>
     
      <div className="product-list">
      <h2>Product List</h2>
      <div className="product-container">
      {filteredProducts !== 'undefined' ? (
          filteredProducts.map((product) => (
            <div  className="product-card" key={product.id}>
               <img src={product1Image} alt="53" />
              <div className="product-name">{product.name}</div>
              <div>Info: {product.description}</div>
              <div>Category: {product.category}</div>
              <div className="product-price">Price: ${product.price}</div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
    </div>
  )
};




export default App;
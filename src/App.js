import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterByCategory, searchProducts } from "./actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.filteredProducts);
console.log("sdjsdsds", filteredProducts)
  
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    dispatch(filterByCategory(event.target.value));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(searchProducts(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleCategoryChange} value={category}>
        <option value="">Select Category</option>
        {/* Add categories dynamically from the API or hardcoded */}
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Transport">Transport</option>
        <option value="Books">Books</option>
      </select>

      <div>
      {filteredProducts !== 'undefined' ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default App;
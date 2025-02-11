import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };
};

export const filterByCategory = (category) => {
  return {
    type: "FILTER_BY_CATEGORY",
    payload: category,
  };
};

export const searchProducts = (searchTerm) => {
  return {
    type: "SEARCH_PRODUCTS",
    payload: searchTerm,
  };
};
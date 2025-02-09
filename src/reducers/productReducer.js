
const initialState = {
    products: [],
    filteredProducts: [],
    categories: [],
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS":
        return {
          ...state,
          products: action.payload,
          filteredProducts: action.payload,
        };
      case "FILTER_BY_CATEGORY":
        return {
          ...state,
          filteredProducts: state.products.filter(
            (product) => product.category === action.payload
          ),
        };
      case "SEARCH_PRODUCTS":
        return {
          ...state,
          filteredProducts: state.products.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return state;
    }
  };
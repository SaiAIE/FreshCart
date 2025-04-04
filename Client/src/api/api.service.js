import axios from "axios";

const api = import.meta.env.VITE_BACKEND

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${api}/api/${endpoint}/`);
    return response;
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err.message);
    throw err;
  }
};

export const getDailySells = () => fetchData("dailySells");
export const getFeatures = () => fetchData("features");
export const getCategories = () => fetchData("category");
export const getFooter = () => fetchData("footer");
export const getGroceries = () => fetchData("grocery");
export const getDropdowns = () => fetchData("dropdowns");
export const getSliders = () => fetchData("slider");
export const getAllCategoriesProducts = () =>fetchData("productsCategories")

// export const getProducts = async () => {
//   const products = await fetchData("product");
//   return products.data.map(product => ({
//     ...product,
//     price: parseFloat(String(product.price).replace("$", ""))
//   }));
// };

export const getProducts = async (filters = {}) => {
  const queryObj = {}
  if(filters.category) queryObj.category = filters.category
  if(filters.priceRange) queryObj.priceRange = filters.priceRange
  if(filters.rating) queryObj.rating = filters.rating
  if(filters.sortOrder) queryObj.sortOrder = filters.sortOrder

  const query = new URLSearchParams(queryObj).toString()
  const products = await fetchData(`product?${query}`)
  return products.data.map(product => ({
    ...product,
    price: parseFloat(String(product.price).replace("$", ""))
  }));
};

export const getProductById = async (id) => {
    try {
      const response = await axios.get(`${api}/api/product/${id}`);
      return response.data;
    } catch (err) {
      console.error(`Error fetching product ${id}:`, err.message);
      throw err;
    }
  };

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

export const getProducts = async (filters = {}) => {
  const queryObj = {};
  if (filters.category) queryObj.category = filters.category;
  if (filters.priceRange) queryObj.priceRange = filters.priceRange;
  if (filters.rating) queryObj.rating = filters.rating;
  if (filters.sort)  queryObj.sort = filters.sort;
  const query = new URLSearchParams(queryObj).toString();
  const url = `product?${query}`;
  const products = await fetchData(url);
  const actualProducts = Array.isArray(products)
    ? products
    : products.data || [];
  return actualProducts.map((product) => ({
    ...product,
    price: parseFloat(
      typeof product.price === "string"
        ? product.price.replace("$", "")
        : product.price
    ),
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

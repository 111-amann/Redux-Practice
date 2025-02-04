import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const asyncGetProducts = () => async (dispatch, getState) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => dispatch(getProducts(response.data)))
    .catch((error) => console.error(error))
};

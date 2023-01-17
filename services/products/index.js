import axios from "axios";

export const getProducts = async (number) => {
    return number ?
    axios
    .get(
      `${process.env.API_URL}/products?limit=${number}`
    )
    .then((response) => response.data)
    :
    axios
    .get(
      `${process.env.API_URL}/products/`
    )
    .then((response) => response.data)
  };
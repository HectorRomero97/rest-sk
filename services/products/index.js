import axios from "axios";

export const getProducts = async () => {
    return axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/`
      )
      .then((response) => response);
  };
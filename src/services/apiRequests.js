import axios from "axios";
import {url} from "../api/api"

// Get data using axios

export const getData = async (url) => {
  try {
    const response = await axios.get(`${url}/data`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

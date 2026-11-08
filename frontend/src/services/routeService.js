import axios from "axios";

const API_BASE_URL = "http://localhost:5287/api/routes";

export const getRoutes = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};
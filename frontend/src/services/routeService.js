import axios from "axios";

const API_BASE_URL = "https://localhost:5001/api/routes";

export const getRoutes = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};
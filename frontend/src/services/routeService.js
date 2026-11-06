import axios from "axios";

const API_URL = "http://localhost:5287";

export const getRoutes = async () => {
  const response = await axios.get(
    `${API_URL}/weatherforecast`
  );

  return response.data;
};

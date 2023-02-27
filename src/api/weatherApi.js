import axios from "axios";
import { API_KEY } from "@/api/apiKey";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

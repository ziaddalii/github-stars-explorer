import axios from "axios";
import { API_URI } from "./constants";

export const fetchOwnerDetails = async (
  owner: string,
) => {
  try {
    const response = await axios.get(`${API_URI}/users/${owner}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repository:", error);
    throw error;
  }
};

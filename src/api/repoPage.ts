import axios from "axios";
import { API_URI } from "./constants";

export const fetchRepositoryDetails = async (
  owner: string,
  repoName: string
) => {
  try {
    const response = await axios.get(`${API_URI}/repos/${owner}/${repoName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching repository:", error);
    throw error;
  }
};


import axios from "axios";
import { API_URI } from "./constants";

export const searchRepositories = async (query: string, page: number) => {
  try {
    const response = await axios.get(`${API_URI}/search/repositories`, {
      params: {
        q: query,
        sort: "stars",
        order: "desc",
        page: page,
        per_page: 10,
      },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};

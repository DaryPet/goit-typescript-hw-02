import axios from "axios";

const ACCESS_KEY = "keROiOoPRBTtA2JzYYy0OQCIs0O0YyVlgTqdL-9q8Pc";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImage = async (searchQuery:string, currentPage:number) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      per_page: 10,
      page: currentPage,
    },
  });
  return response.data;
};

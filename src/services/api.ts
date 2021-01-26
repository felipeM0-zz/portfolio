import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/repos/felipem0/data/contents",
  headers: {
    Authorization: "token " + process.env.REACT_APP_GITHUB_TOKEN,
  },
});

export const api_pure = axios.create({
  baseURL: "",
});

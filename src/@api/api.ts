// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY as string;
const API_URL = process.env.REACT_APP_API_URL as string;

export const weatherAxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

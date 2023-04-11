import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_LIVE_URL,
});

export default instance;

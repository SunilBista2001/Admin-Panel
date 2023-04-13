import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: process.env.REACT_APP_LIVE_URL,
  headers: {
    Authorization: token,
  },
});

export default instance;

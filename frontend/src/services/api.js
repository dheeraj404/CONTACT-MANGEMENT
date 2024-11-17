import axios from "axios";

const api = axios.create({
  baseURL: "https://contact-mangement-1sse.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

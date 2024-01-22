import axios from "axios";
const instance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-3131f/us-central1/api",
  // baseURL: "http://localhost:1234/",
  baseURL: "https://amazon-backend-m8aa.onrender.com",
});
export default instance;

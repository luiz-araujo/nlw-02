import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", // http://<Expo emulator ip>:serverAppPort*
});

export default api;

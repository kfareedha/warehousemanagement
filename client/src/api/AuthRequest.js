import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });
export const logIn = (formData) => {
  console.log(formData, "API");
  return API.post("/auth/login", formData);
};
export const signUp = (formData) => API.post("/auth/register", formData);

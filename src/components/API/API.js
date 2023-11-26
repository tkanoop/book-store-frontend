// PLace it in API folder 
import axios from "axios";
const API = axios.create({
  baseURL:'https://book-store-backend-production-8e74.up.railway.app'
});
API.interceptors.request.use((req) => {
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token"))
    req.headers.authorization =localStorage.getItem("token")
  return req;
});
export const auth = () => API.get("/auth");
export const login = (authData) => API.post("/api/user/signin", authData);
export const sign = (authData) => API.post("/api/user/signup", authData);
export const fetchBooks = () => API.get("/api/auth/books"); 
export const fetchCart = () => API.get("/api/auth/cartView"); 
export const authenticate = () => API.get("/api/auth/authentication"); 
export const checkout = () => API.get("/api/auth/make-order"); 

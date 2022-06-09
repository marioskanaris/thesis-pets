import axios from "axios";
import store from "../store";
import router  from "@/router/";

let Api = axios.create({
  baseURL: "/api",
});

Api.defaults.withCredentials = true;

Api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status == 401) {
        store.dispatch("auth/signOut").then(() => {
          router.push("/login");
        });
      }
      return Promise.reject(error)
    }
);


export default Api;

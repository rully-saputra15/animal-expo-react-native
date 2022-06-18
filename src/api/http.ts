import axios from "axios";

const baseURL = "https://zoo-animal-api.herokuapp.com/";
const http = axios.create({ baseURL });

http.interceptors.request.use((httpConfig) => {
  return httpConfig;
});

http.interceptors.response.use((res) => res, (error) => {
    if (error.response) {
      const { code } = error.response.data;
      if (code === 500) {
        console.log(error.response.data.messages[0]);
      }
    }
    return Promise.reject(error);
  }
);

export default http;

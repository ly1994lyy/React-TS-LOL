import axios from "axios";
import { message } from "antd";
const createHistory = require("history").createHashHistory

const instance = axios.create({
  baseURL: "admin/api"
});

instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log(err.response)
    if (err.response.data.message) {
      message.error(err.response.data.message);

      if (err.response.status === 401) {
        const history = createHistory();
        history.push("/login");
      }
    }
    return Promise.reject(err);
  }
);

instance.interceptors.request.use(function(config) {
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config;
  },function(err) {
    return Promise.reject(err);
  }
);

export function get(url, params) {
  return instance.get(url, {
    params
  });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}

export function del(url) {
  return instance.delete(url);
}

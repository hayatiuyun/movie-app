import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  
  Api.interceptors.request.use(async function (config) {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
    return config;
  });
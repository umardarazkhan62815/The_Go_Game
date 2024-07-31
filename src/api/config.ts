// config.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const API_URL = "http://44.201.64.206:3000/web";

export const createAxiosInstance = async () => {
  let token = null;
  try {
    token = await AsyncStorage.getItem("authToken");
    console.log("token>>>>", token);
  } catch (error) {
    console.error("Error retrieving token:", error);
  }
  const axiosConfig = {
    baseURL: API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  };
  return axios.create(axiosConfig);
};

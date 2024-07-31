// index.ts
import { createAxiosInstance } from './config';

export const getRequest = async (url: string) => {
  try {
    const axiosInstance = await createAxiosInstance();
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postRequest = async (url: string, payload: object) => {
  try {
    const axiosInstance = await createAxiosInstance();
    const response = await axiosInstance.post(url, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

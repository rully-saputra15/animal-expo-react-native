import axios, {AxiosResponse} from "axios";
import {ApiResponse} from "../interface";

const utils = {
  async apiHandler<T>(
    request: Promise<AxiosResponse<ApiResponse<T>>>,
    formatter: Function
  ): Promise<ApiResponse<T>> {
    try {
      return formatter((await request).data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
      throw new Error(error as any);
    }
  }
};

export default utils;

//== Modules
import { axiosClient, axiosWithToken } from "@/utils/axios";
//== Utils
import { successNotify, errorNotify } from "@/utils/toast";

interface Options {
  withToken?: boolean
  body?: any
}

interface Response<T> {
  success: boolean
  status: number
  message: string
  data?: T

}

class API_HANDLER {
  public async GET<T>(endpoint: string, options?: Options): Promise<T | undefined> {
    const axios = options?.withToken ? axiosWithToken : axiosClient;
    try {
      const response = await axios.get<Response<T>>(endpoint);
      const data = response.data as T;
      if (data) return data;
    } catch (err: any) {
      typeof window === 'undefined' ?
        console.log(err?.message)
        :
        errorNotify(err?.message);
    }
  }
  public async POST<T>(endpoint: string, options: Options): Promise<T | undefined> {
    const body = options?.body;
    const axios = options?.withToken ? axiosWithToken : axiosClient;
    try {
      const response = await axios.post<Response<T>>(endpoint, body);
      const data = response.data as T;
      if (data) return data;
    } catch (err: any) {
      typeof window === 'undefined' ?
        console.log(err?.message)
        :
        errorNotify(err?.message);
    }
  }
  public async PATCH<T>(endpoint: string, options: Options): Promise<T | undefined> {
    const body = options?.body;
    const axios = options?.withToken ? axiosWithToken : axiosClient;
    try {
      const response = await axios.patch<Response<T>>(endpoint, body);
      const data = response.data as T;
      if (data) return data;
    } catch (err: any) {
      typeof window === 'undefined' ?
        console.log(err?.message)
        :
        errorNotify(err?.message);
    }
  }
  public async PUT<T>(endpoint: string, options: Options): Promise<T | undefined> {
    const body = options?.body;
    const axios = options?.withToken ? axiosWithToken : axiosClient;
    try {
      const response = await axios.put<Response<T>>(endpoint, body);
      const data = response.data as T;
      if (data) return data;
    } catch (err: any) {
      typeof window === 'undefined' ?
        console.log(err?.message)
        :
        errorNotify(err?.message);
    }
  }
  public async DELETE<T>(endpoint: string, options: Options): Promise<T | undefined> {
    const body = options?.body;
    const axios = options?.withToken ? axiosWithToken : axiosClient;
    try {
      const response = await axios.delete<Response<T>>(endpoint, { data: body });
      const data = response.data as T;
      if (data) return data;
    } catch (err: any) {
      typeof window === 'undefined' ?
        console.log(err?.message)
        :
        errorNotify(err?.message);
    }
  }
}

const api = new API_HANDLER();
export default api;
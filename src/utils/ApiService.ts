import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "../constants/apiConstants.ts";

class ApiService {
    static async get<T>(url: string, config?: AxiosRequestConfig): Promise<{ data: T, headers: any }> {
        try {
            const response = await axios.get(`${API_BASE_URL}${url}`);
            return {data: response.data, headers: response.headers};
        } catch (error) {
            throw new Error(`GET request failed: ${error}`);
        }
    }

    static async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await axios.post(`${API_BASE_URL}${url}`, data, config);
            return response.data;
        } catch (error) {
            throw new Error(`POST request failed: ${error}`);
        }
    }

    static async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await axios.put(`${API_BASE_URL}${url}`, data, config);
            return response.data;
        } catch (error) {
            throw new Error(`PUT request failed: ${error}`);
        }
    }

    static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response = await axios.delete(`${API_BASE_URL}${url}`, config);
            return response.data;
        } catch (error) {
            throw new Error(`DELETE request failed: ${error}`);
        }
    }
}

export default ApiService;
import { CREATEORDER } from "../constants/apiConstants.ts";
import ApiService from "./ApiService.ts";

class OrderService {

    static async createOrder(orderRequest) {
        try {
        const user = localStorage.getItem("user");
        const userDetail = user ? JSON.parse(user) : null;
    
        if (!userDetail) {
          console.error("User not found");
          return;
        }
        
        const response = await ApiService.post(`${CREATEORDER}`, orderRequest);; // Adjust API endpoint
        return response.data;
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      }
}

export default OrderService
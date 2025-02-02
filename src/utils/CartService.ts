import ApiService from "./ApiService.ts";
import { ADD_TO_CART, CART } from "../constants/apiConstants.ts";

class CartService {
  static async addToCart(userId: number, productId: number, quantity: number, size: number, price: number, selectedFields: any, uploadedImages: File[]) {
    const formData = new FormData();
    formData.append("userId", userId.toString());
    formData.append("productId", productId.toString());
    formData.append("quantity", quantity.toString());
    formData.append("size", size.toString());
    formData.append("price", price.toString());
    formData.append("customFields", JSON.stringify(selectedFields));
    uploadedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await ApiService.post(ADD_TO_CART, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response;
    } catch (error) {
      throw new Error("Failed to add item to cart");
    }
  }

  static async fetchCart(){
    const user = localStorage.getItem("user");
    const userDetail = user ? JSON.parse(user) : null;
    
    if (!userDetail) {
      console.error("User not found");
      return;
    }
    try {
        const response = await  ApiService.get(`${CART}/${userDetail.id}`);; // Adjust API endpoint
        return response.data;
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
  }
}

export default CartService;

// Product types
export interface ProductResponse {
    items: Array<Product>;
    pagesCount: number;
    totalElements: number;
}

export interface ProductSizeResponse {
  items: Array<ProductSizes>;
}




export interface ProductReviewResponseModel {
    rating: number;
    message: string;
    author: string;
    date: string; // or Date if you use Date objects
  }
  
  export interface ProductSizeResponseModel {
    size: string;
    additionalPrice: number;
  }
  
  export interface Product {
    productCode: string;
    name: string;
    category: string;
    brand: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    sku: string;
    weight: number;
    color: string;
    material: string;
    manufacturer: string;
    availability: boolean;
    reviews: Array<ProductReviewResponseModel>;
    sizes: Array<ProductSizeResponseModel>;
  }

  export interface ProductSizes {
    id: number,
    size: string,
    additionalPrice: string
  }
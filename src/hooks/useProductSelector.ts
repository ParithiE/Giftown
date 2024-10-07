import { useSelector } from "react-redux"
import { selectAllProducts } from "../reducers/product-selector.ts"
import { useMemo } from "react";


export const useProductSeletor = () => {
    const product = useSelector(selectAllProducts);
    const categories = useMemo(() => {
       
        const uniquiCategories = product.products.reduce((acc, item)=> {
            const category = item.category;
            if(!acc.some(cat => cat.id == category.id)){
                acc.push(category);
            }
            return acc;
        }, []);
        return uniquiCategories;
    },[product]);

    const trendingProducts = useMemo(() => {
        if (!product || !Array.isArray(product.products)) {
            return []; // Return an empty array if products is undefined or not an array
        }
        return product.products.filter((item) =>  item.productMetaData && item.productMetaData.isTrending
        );

    }, [product]);

    return{categories, trendingProducts};
}
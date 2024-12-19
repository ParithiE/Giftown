import { useSelector } from "react-redux"
import { selectAllProducts } from "../reducers/product-selector.ts"
import { useMemo } from "react";


export const useProductSeletor = () => {
    const productState = useSelector(selectAllProducts);
    const categories = useMemo(() => {
       
        const uniquiCategories = productState.products.reduce((acc, item)=> {
            const category = item.category;
            if(!acc.some(cat => cat.id == category.id)){
                acc.push(category);
            }
            return acc;
        }, []);
        return uniquiCategories;
    },[productState]);

    const trendingProducts = useMemo(() => {
        if (!productState || !Array.isArray(productState.products)) {
            return []; // Return an empty array if products is undefined or not an array
        }
        return productState.products.filter((item) =>  item.productMetaData && item.productMetaData.isTrending
        );

    }, [productState]);

    const subCategories = useMemo(() => {
        const uniqueSubCategory = productState.products.reduce((acc, item) => {
            const subCategory = item.subCategory;
            if(!acc.some(sub => sub.id == subCategory.id)){
                acc.push(subCategory);
            }
            return acc;
        },[]);
        return uniqueSubCategory;
    }, [productState]);

    const products = productState.products;

    return{products, categories, subCategories, trendingProducts};
}
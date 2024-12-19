import { useParams } from "react-router-dom";
import CardProductDetail from "../components/card/CardProductDetail";
import { useProductSeletor } from "../hooks/useProductSelector.ts"
import { IMAGEPATH } from "../constants/CommonConstant.ts";

const SubCategory = () => {
    const { categoryId } = useParams();
    const { categories , subCategories } = useProductSeletor();

    const filteredSubCategories = categoryId ? subCategories.filter((item) => item.categoryId == categoryId) : subCategories;
    const filteredCategories = categoryId && categories.filter((item) => item.id == categoryId)

    // const products = data.products;
    const rows = [...Array(Math.ceil(filteredSubCategories.length / 8))];
    //chunk the products into the array of rows
    const subCategoryRow = rows.map((row, idx) =>
        filteredSubCategories.slice(idx * 8, idx * 8 + 8)
    );

    return (
        
        <div>
            <h2 className="text-center">
        {categoryId ? `Subcategories for ${filteredCategories[0].categoryname}` : 'Explore Subcategories'}
      </h2>
       { subCategoryRow.map((row, idx) => {
            return (
                // <div className={`card-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                    <div className="row g-3">
                        {row.map((item, idx) => {
                            return (
                                <div key={idx} className="col-6 col-md-3 mt-4">
                                    <CardProductDetail img={`${IMAGEPATH.Category}${item.imageUrl}`}
                                        title={item.subcategoryName}
                                        tips={item.tips}
                                        // text={"Upto 10% Off"}
                                        category={true}
                                        // categoryId={}
                                        to={`/subcategory/${item.id}/product`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }

        )
    }</div>
        );
}

export default SubCategory;
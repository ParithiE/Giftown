import React, { lazy, useState, useEffect } from "react";
import { data } from "../../data";
import { useProductSeletor } from "../../hooks/useProductSelector.ts";

const Paging = lazy(() => import("../../components/Paging"));
const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const FilterCategory = lazy(() => import("../../components/filter/Category"));
const FilterPrice = lazy(() => import("../../components/filter/Price"));
const FilterSize = lazy(() => import("../../components/filter/Size"));
const FilterStar = lazy(() => import("../../components/filter/Star"));
const FilterColor = lazy(() => import("../../components/filter/Color"));
const FilterTag = lazy(() => import("../../components/filter/Tag"));
const FilterClear = lazy(() => import("../../components/filter/Clear"));
const CardServices = lazy(() => import("../../components/card/CardServices"));
const CardProductGrid = lazy(() => import("../../components/card/CardProductGrid"));
const CardProductList = lazy(() => import("../../components/card/CardProductList"));

const ProductListView = () => {

  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [view, setView] = useState("grid");
  const { products } = useProductSeletor();
  useEffect(() => {
    const totalItems = getProducts().length;
    setTotalItems(totalItems);
  }, []);

  const getProducts = () => {
    let filteredProducts = products.filter((item) => item.productMetaData != null)//data.products;
    // Multiply products as per the original logic
    // for (let i = 0; i < 5; i++) {
    //   filteredProducts = filteredProducts.concat(products);
    // }
    return filteredProducts;
  };

  const onPageChanged = (page) => {
    let products = getProducts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = products.slice(offset, offset + pageLimit);
    setCurrentPage(currentPage);
    setCurrentProducts(currentProducts);
    setTotalPages(totalPages);
  };

  const onChangeView = (view) => {
    setView(view);
  };

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-2">
            {/* <FilterCategory />
            <FilterPrice />
            <FilterSize />
            <FilterStar />
            <FilterColor />
            <FilterClear />
            <FilterTag />
            <CardServices /> */}
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-7">
                <span className="align-middle fw-bold">
                  {totalItems} results for{" "}
                  <span className="text-warning">"t-shirts"</span> 
                </span>
              </div>
              <div className="col-5 d-flex justify-content-end">
                <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                >
                  <option value={1}>Most Popular</option>
                  <option value={2}>Latest items</option>
                  <option value={3}>Trending</option>
                  <option value={4}>Price low to high</option>
                  <option value={5}>Price high to low</option>
                </select>
                <div className="btn-group ms-3" role="group">
                  <button
                    aria-label="Grid"
                    type="button"
                    onClick={() => onChangeView("grid")}
                    className="btn btn-outline-secondary"
                    style={{
                      backgroundColor: view === "grid" ? "var(--secondary-color)" : "white",
                      color: "black",
                    }}
                  >
                    <i className="bi bi-grid" />
                  </button>
                  <button
                    aria-label="List"
                    type="button"
                    onClick={() => onChangeView("list")}
                    className="btn btn-outline-secondary"
                    style={{
                      backgroundColor: view === "list" ? "var(--secondary-color)" : "white",
                      color: "black",
                    }}
                  >
                    <i className="bi bi-list" />
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row g-3">
              {view === "grid" &&
                currentProducts.map((product, idx) => (
                  <div key={idx} className="col-md-3">
                    <CardProductGrid data={product} />
                  </div>
                ))}
              {view === "list" &&
                currentProducts.map((product, idx) => (
                  <div key={idx} className="col-md-12">
                    <CardProductList data={product} />
                  </div>
                ))}
            </div>
            <hr />
            <Paging
              totalRecords={totalItems}
              pageLimit={9}
              pageNeighbours={3}
              onPageChanged={onPageChanged}
              sizing=""
              alignment="justify-content-center"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductListView;

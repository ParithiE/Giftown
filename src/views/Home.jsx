import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
import CardProductDetail from "../components/card/CardProductDetail";
import { CardSupport } from "../components/card/CardSupport";
import { useProductSeletor } from "../hooks/useProductSelector.ts";
import { IMAGEPATH } from "../constants/CommonConstant.ts";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

const HomeView = () => {
  const { categories, trendingProducts } = useProductSeletor();

  const products = data.products;
  const rows = [...Array(Math.ceil(categories.length / 5))];
  //chunk the products into the array of rows
  const categoryRow = rows.map((row, idx) =>
    categories.slice(idx * 5, idx * 5 + 5)
  );
  // map the rows as div.row
  const carouselContent = categoryRow.map((row, idx) => {
    return (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((category, idx) => {
            return (
              <div className="col-md-2 col-sm-4 col-6" key={idx} >

                <CardProductDetail img={`${IMAGEPATH.Category}${category.imageUrl}`}
                  title={category.categoryname}
                  tips={category.tips}
                  text={"Upto 10% Off"}
                  category={true} 
                  // categoryId={}
                  to = {`/category/${category.id}`}/>

                {/* <CardIcon
                  title={category.categoryname}
                  text=
                  tips={category.tips}
                 
                 
                >
                  <img src= style={{ overflow: "hidden" }} alt="category.title" />
                </CardIcon> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  const trendingProduct = trendingProducts.map((item, idx) => {
    // <div className={`card-item ${idx === 0 ? "active" : ""}`} key={idx}>

    return (
      <div key={idx} className="col-md-4 mt-4">
        <CardProductDetail img={`${IMAGEPATH.Product}${item.productMetaData.imageUrl}`}
          title={item.name}
          originalPrice={item.productMetaData.price}
          discountPrice={item.productMetaData.price}
          star={item.star}
          product = {true} />
      </div>

    )
  })

  return (
    <React.Fragment>
      <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
      <h2 class="m-4 text-section"> Categories </h2>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-12"> */}
          <Carousel id="elect-product-category" className="mb-4">
            {/* <div className="row g-3"> */}
            {carouselContent}
            {/* </div> */}
          </Carousel>
          {/* </div> */}
        </div>
      </div>
      <div className="container-fluid bg-light mb-3 mt-3">
        <div className="row g-3">
          <div className="col-md-9">

            <Support />

          </div>
          <div className="col-md-3">
            <CardLogin className="mb-3" />
            <CardImage src="../../images/gift.png" to="promo" className="lucky-image" />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-3">
        <div className="row">
          <div className="col-md-12">
            <CardDealsOfTheDay
              endDate={Date.now() + 1000 * 60 * 60 * 14}
              title="Trending Gifts"
              to="/"
            >
              <Carousel id="elect-product-detail">

                <div className="row g-3">
                  {trendingProduct}
                </div>
              </Carousel>
            </CardDealsOfTheDay>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row d-flex flex-column align-items-center text-center">
                <div className="col-md-12">
                  <CardSupport />

                  <div className="col-md-12">
                    <CardSupport />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="container">
              <div className="row">
                <div className="p-3 text-center mb-3">
                  <h2 class="m-4 text-section">Explore Sub Categories</h2>
                </div>

                {/* <div className="col-md-3">
                    <Link to="/" className="text-decoration-none">
                      <img
                        src="../../images/category/male.webp"
                        className="img-fluid rounded-circle"
                        alt="..."
                      />
                      <div className="text-center h6">Men's Clothing</div>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/" className="text-decoration-none">
                      <img
                        src="../../images/category/female.webp"
                        className="img-fluid rounded-circle"
                        alt="..."
                      />
                      <div className="text-center h6">Women's Clothing</div>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/" className="text-decoration-none">
                      <img
                        src="../../images/category/smartwatch.webp"
                        className="img-fluid rounded-circle"
                        alt="..."
                      />
                      <div className="text-center h6">Smartwatch</div>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/" className="text-decoration-none">
                      <img
                        src="../../images/category/footwear.webp"
                        className="img-fluid rounded-circle"
                        alt="..."
                      />
                      <div className="text-center h6">Footwear</div>
                    </Link>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default HomeView;

import { lazy, useCallback, useEffect, useState } from "react";
import { data } from "../../data/index.js";
import { useParams } from "react-router-dom";
import { useProductSeletor } from "../../hooks/useProductSelector.ts";
import ApiService from "../../utils/ApiService.ts";
import { PRODUCTS } from "../../constants/apiConstants.ts";
const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct.jsx")
);
const CardServices = lazy(() => import("../../components/card/CardServices.jsx"));
const Details = lazy(() => import("../../components/others/Details.jsx"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews.jsx")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer.jsx")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns.jsx")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart.jsx"));

const ProductDetailView = () => {
  const { productId } = useParams();
  const { products } = useProductSeletor();
  //const [product, setProduct] = useState(null);
  const [productSizes, setProductSizes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [originalPrice, setOriginalPrice] = useState<number | null>(null);
  const [discountPrice, setDiscountPrice] = useState<number | null>(null);
  const [cart, setCart] = useState<number | null>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(1);




  const product = products.find((item) => item.id === parseInt(productId));
 // setProduct(product);
  // Fetch the product details based on productId
  const fetchProductDetails = useCallback(async () => {
    if (!product) return;
    setLoading(true);
    try {
      if (product) {
        const response = await ApiService.get(`${PRODUCTS}/${product.id}/${product.subCategory.id}/sizes`);
        setProductSizes(response.data);
        
        if (response.data.length > 0) {
          const firstSize = response.data[0];
          setSelectedSize(firstSize);
          setSelectedPrice(product.productMetaData.price + firstSize.additionalPrice);
          setOriginalPrice(product.productMetaData.price + 300);
          setDiscountPrice(product.productMetaData.price + firstSize.additionalPrice - 300);
        }
      }
    } catch (err) {
      setError("Error fetching product details");
    } finally {
      setLoading(false);
    }
  }, [productId, products]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  const handleSizeClick = (size: any) => {
    setSelectedSize(size);
    if (product && product.productMetaData) {
      setSelectedPrice(product.productMetaData.price + size.additionalPrice);
      setOriginalPrice(product.productMetaData.price + size.additionalPrice + 500);
      setDiscountPrice(product.productMetaData.price + size.additionalPrice - 300);
    }
  };

  const addToCart = (add) => {
    setCart(cart + 1);
  }


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  const addInformation = product.productMetaData.addInformation

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img
                src="../../images/products/tshirt_red_480x400.webp"
                className="img-fluid mb-3"
                alt=""
              />
              <img
                src="../../images/products/tshirt_grey_480x400.webp"
                className="border border-secondary me-2"
                width="75"
                alt="..."
              />
              <img
                src="../../images/products/tshirt_black_480x400.webp"
                className="border border-secondary me-2"
                width="75"
                alt="..."
              />
              <img
                src="../../images/products/tshirt_green_480x400.webp"
                className="border border-secondary me-2"
                width="75"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <h1 className="h5 d-inline me-2">{product.name}</h1>
              <span className="badge bg-success me-2">New</span>
              <span className="badge bg-danger me-2">{product.productMetaData.isTrending && `Hot`}</span>
              <div className="mb-3">
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />|{" "}
                <span className="text-muted small">
                  42 ratings and 4 reviews
                </span>
              </div>
              <dl className="row small mb-3">
                {product.productMetaData.availability && <><dt className="col-sm-3">Availability</dt>
                  <dd className="col-sm-9">In stock</dd></>}
                {product.productMetaData.manufacturer && <><dt className="col-sm-3">Sold by</dt>
                  <dd className="col-sm-9"> {product.productMetaData.manufacturer} </dd></>}
                <dt className="col-sm-3">Size</dt>
                <dd className="col-sm-9">
                  {productSizes.map((item, key) => (
                    <div className="form-check form-check-inline" key={key}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size"
                        id={`size-${item.id}`} // Ensure unique IDs for accessibility
                        onClick={() => handleSizeClick(item)}
                        checked={selectedSize?.id === item.id} // Check if the size is selected
                      />
                      <label className="form-check-label" htmlFor={`size-${item.id}`}>
                        {item.size}
                      </label>
                    </div>
                  ))}
                 </dd>
               
                <dt className="col-sm-3">Frame Style</dt>
                <dd className="col-sm-9">
                  <button className="btn btn-sm btn-primary p-2 me-2"></button>
                  <button className="btn btn-sm btn-secondary p-2 me-2"></button>
                  <button className="btn btn-sm btn-success p-2 me-2"></button>
                  <button className="btn btn-sm btn-danger p-2 me-2"></button>
                  <button className="btn btn-sm btn-warning p-2 me-2"></button>
                  <button className="btn btn-sm btn-info p-2 me-2"></button>
                  <button className="btn btn-sm btn-dark p-2 me-2"></button>
                </dd>
              </dl>

              <div className="mb-3">
                <span className="fw-bold h5 me-2">RS: {selectedPrice ?? product?.productMetaData?.price}</span>
                <del className="small text-muted me-2 text-decoration-line-through">{originalPrice}</del>
                <span className="rounded p-1 bg-warning  me-2 small">
                -{discountPrice}
                </span>
              </div>
              <div className="mb-3">
                <div className="d-inline float-start me-2">
                  <div className="input-group input-group-sm mw-140">
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                      onClick={() => setCartCount((prevCount) => Math.max(1, prevCount - 1))}
                    >
                      <i className="bi bi-dash-lg"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      value={cartCount}
                      readOnly 
                    />
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                      onClick={() => setCartCount((prevCount) => prevCount + 1)}
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-primary me-2"
                  title="Add to cart"
                >
                  <i className="bi bi-cart-plus me-1"></i>Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-warning me-2"
                  title="Buy now"
                >
                  <i className="bi bi-cart3 me-1"></i>Buy now
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  title="Add to wishlist"
                >
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
              {/* <div>
                <p className="fw-bold mb-2 small">Product Highlights</p>
                <ul className="small">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                  <li>Cras consequat felis ut vulputate porttitor.</li>
                </ul>
                <div dangerouslySetInnerHTML={{ __html: addInformation }} />
              </div> */}

              {product.productFields && product.productFields.map((field, key) => (
                <div key={field.id} className="mb-3">
                <label htmlFor={`field-${field.id}`} className="form-label">
                  {field.fieldName} {field.required && <span className="text-danger">*</span>}
                </label>
                {field.fieldType === "Text" && (
                  <input
                    type="text"
                    id={`field-${field.id}`}
                    className="form-control"
                    placeholder={`Enter ${field.fieldName}`}
                    required={field.required}
                  />
                )}
                {field.fieldType === "Image" && (
                  <input
                    type="file"
                    id={`field-${field.id}`}
                    className="form-control"
                    accept="image/*"
                    required={field.required}
                  />
                )}
              </div>
            ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-link active"
                    id="nav-details-tab"
                    data-bs-toggle="tab"
                    href="#nav-details"
                    role="tab"
                    aria-controls="nav-details"
                    aria-selected="true"
                  >
                    Details
                  </a>
                  <a
                    className="nav-link"
                    id="nav-randr-tab"
                    data-bs-toggle="tab"
                    href="#nav-randr"
                    role="tab"
                    aria-controls="nav-randr"
                    aria-selected="false"
                  >
                    Ratings & Reviews
                  </a>
                  {/* <a
                    className="nav-link"
                    id="nav-faq-tab"
                    data-bs-toggle="tab"
                    href="#nav-faq"
                    role="tab"
                    aria-controls="nav-faq"
                    aria-selected="false"
                  >
                    Questions and Answers
                  </a> */}
                  {/* <a
                    className="nav-link"
                    id="nav-ship-returns-tab"
                    data-bs-toggle="tab"
                    href="#nav-ship-returns"
                    role="tab"
                    aria-controls="nav-ship-returns"
                    aria-selected="false"
                  >
                    Shipping & Returns
                  </a> */}
                  <a
                    className="nav-link"
                    id="nav-size-chart-tab"
                    data-bs-toggle="tab"
                    href="#nav-size-chart"
                    role="tab"
                    aria-controls="nav-size-chart"
                    aria-selected="false"
                  >
                    Size Chart
                  </a>
                </div>
              </nav>
              <div className="tab-content p-3 small" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                <Details data = {product.productMetaData.description}/>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-randr"
                  role="tabpanel"
                  aria-labelledby="nav-randr-tab"
                >
                  {Array.from({ length: 5 }, (_, key) => (
                    <RatingsReviews key={key} />
                  ))}
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-faq"
                  role="tabpanel"
                  aria-labelledby="nav-faq-tab"
                >
                  <dl>
                    {Array.from({ length: 5 }, (_, key) => (
                      <QuestionAnswer key={key} />
                    ))}
                  </dl>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-ship-returns"
                  role="tabpanel"
                  aria-labelledby="nav-ship-returns-tab"
                >
                  <ShippingReturns />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-size-chart"
                  role="tabpanel"
                  aria-labelledby="nav-size-chart-tab"
                >
                  <SizeChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <CardFeaturedProduct data={data.products} />
          <CardServices />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;

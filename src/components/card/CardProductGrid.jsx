import { Link } from "react-router-dom";
import '../../App.css'
import { IMAGEPATH } from "../../constants/CommonConstant.ts";

const CardProductGrid = (props) => {
  const product = props.data;
  return (
    <div className="card" style={{ borderRadius: "20px"}}>
      <Link to={`/product/${product.id}/detail`} className="text-decoration-none">
       <div style={{overflow: "hidden", borderRadius: "20px 20px 0px 0px" }}>
        <img src={`${IMAGEPATH.Product}${product.productMetaData.imageUrl}`}className="card-img-top card-img-top zoom-img" alt="..." style={{ borderRadius: "inherit" }} />
       </div>
       </Link>
      {true && (
        <span className="badge bg-success position-absolute mt-2 ms-2">
          New
        </span>
      )}
      {true && (
        <span className="badge bg-danger position-absolute r-0 mt-2 me-2">
          Hot
        </span>
      )}
      {(product.discountPercentage > 0 || product.discountPrice > 0) && (
        <span
          className={`rounded position-absolute p-2 bg-warning  ms-2 small ${
            true ? "mt-5" : "mt-2"
          }`}
        >
          -
          {product.discountPercentage > 0
            ? product.discountPercentage + "%"
            : "$" + product.discountPrice}
        </span>
      )}
      <div className="card-body">
        <div className="d-flex align-items-end justify-content-between">
        <h6 className="card-subtitle mb-2">
          <Link to={`/product/${product.id}/detail`} className="text-decoration-none">
            {product.name}
          </Link>
        </h6>
        <span
            type="button"
            className={`btn btn-sm ${true ? "btn-secondary" : "btn-outline-secondary"}`}
            title="Add to wishlist"
            style={{borderRadius: "15px"}}
          >
            <i className="bi bi-heart-fill" />
          </span>
          </div>
        <div className="my-2">
          <span className="fw-bold h5">${product.productMetaData.price}</span>
          {product.productMetaData.price > 0 && (
            <del className="small text-muted ms-2">${product.productMetaData.price}</del>
          )}
          <span className="ms-2">
            {Array.from({ length: 4 }, (_, key) => (
              <i className="bi bi-star-fill text-warning me-1" key={key} />
            ))}
          </span>
        </div>
        <div className="btn-group  d-flex" role="group">
          <button
            type="button"
            className={`btn btn-sm ${true ? "btn-primary" : "btn-outline-primary"} fs-6 font-weight-bold`}
            title="Add to cart"
          >
            <i class="bi bi-cart-plus-fill"></i> {true ? "Go To Cart" : "Add To Cart"}
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CardProductGrid;

import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button } from 'react-bootstrap';
import CartService from "../../utils/CartService.ts";
import "../../App.css"

const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

const CartView = () => {
  const onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };
  const [cart, setCart] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Fetch cart data from API
    const fetchCart = async () => {
      const response = await CartService.fetchCart();
      if (response) {
        setCart(response);
      }
    };

    fetchCart();
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Shopping Cart</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.cartItems?.map((item) => {
                      let customFields = {};
                      try {
                        customFields = JSON.parse(item.customFields);
                      } catch (error) {
                        console.error("Invalid JSON in customFields:", error);
                      }

                      return (
                        <tr key={item.id}>
                          <td>
                            <div className="row align-items-center">
                              <div className="col-3 ">
                                {item.imageUrls && item.imageUrls.length > 0 ? (
                                  <img src={item.imageUrls[0]} width="80" alt="Uploaded by user" className="img-fluid" />
                                ) : (
                                  <img src="../../images/placeholder.jpg" width="80" alt="No image available" className="img-fluid" />
                                )}
                              </div>
                              <div className="col">
                                <Link to={`/product/detail/${item.productId}`} className="text-decoration-none">
                                  Product ID: {item.productId}
                                </Link>
                                <p className="small text-muted"><strong>Size:</strong> {item.size}</p>
                                <span className="d-flex">
                                {customFields &&
                                  Object.entries(customFields).map(([key, value]) => (
                                    <p key={key} className="small text-muted" style={{marginRight: "10px"}}>
                                      <strong>Custom {key}:</strong> {value}
                                    </p>
                                  ))}

                                </span>
                               
                                {item.imageUrls && item.imageUrls.length > 1 && (
                                  <div className="d-flex  mt-2">
                                    {item.imageUrls.map((url, index) => (
                                      <img key={index} src={url} width="50" className="me-2 img-thumbnail" alt="User uploaded" />
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="input-group input-group-sm mw-140">
                              <button className="btn btn-primary text-white" type="button">
                                <i className="bi bi-dash-lg"></i>
                              </button>
                              <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                              <button className="btn btn-primary text-white" type="button">
                                <i className="bi bi-plus-lg"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <var className="price">$237.00</var>
                            <small className="d-block text-muted">$79.00 each</small>
                          </td>
                          <td className="text-end">
                            <button className="btn btn-sm btn-outline-secondary me-2">
                              <i className="bi bi-heart-fill"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <Link to="/checkout" className="btn btn-primary float-end">
                  Make Purchase <i className="bi bi-chevron-right"></i>
                </Link>
                <Link to="/" className="btn btn-secondary">
                  <i className="bi bi-chevron-left"></i> Continue shopping
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <i className="bi bi-truck"></i> Free Delivery within 1-2 weeks
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <div className="card-body">
                <CouponApplyForm onSubmit={onSubmitApplyCouponCode} />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-end">$1,568</dd>

                  <dt className="col-6 text-success">Discount:</dt>
                  <dd className="col-6 text-success text-end">-$58</dd>
                  <dt className="col-6 text-success">
                    Coupon:{" "}
                    <span className="small text-muted">EXAMPLECODE</span>{" "}
                  </dt>
                  <dd className="col-6 text-success text-end">-$68</dd>
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end  h5">
                    <strong>$1,350</strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center">
                  <img
                    src="../../images/payment/payments.webp"
                    alt="..."
                    height={26}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light border-top p-4">
        <div className="container">
          <h6>Payment and refund policy</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="container mt-4">
        <Button variant="primary" onClick={handleShow}>
          Show Alert
        </Button>

        {show && (
          <Alert variant="success" onClose={handleClose} dismissible className="mt-3">
            <Alert.Heading>Success!</Alert.Heading>
            <p>
              This is a React-Bootstrap 5 alert. It comes with a dismiss button to close the alert.
            </p>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default CartView;


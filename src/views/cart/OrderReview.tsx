import React, { lazy } from "react";

const CouponApplyForm = lazy(() =>
    import("../../components/others/CouponApplyForm")
  );

const OrderReview: React.FC = ({cart, totalPrice}) => {
    
    // const subtotal = products.reduce((acc, product) => acc + product.price, 0);
    // const total = subtotal; // Add any additional calculations for total if needed

    return (
        <div>
            <h2>Product Details</h2>
            <ul>
                {/* {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))} */}

{cart?.cartItems?.map((product) => (
                     <li key={product.id}>
                     {product.name} - ${product.price}
                 </li>))}
            </ul>

            
            <div>
                <p>Subtotal: ${subtotal}</p>
                <p>Total: ${total}</p>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                {/* <CouponApplyForm  /> */}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-end">RS: {totalPrice()}</dd>

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
    );
};

export default OrderReview;
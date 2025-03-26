import renderFormGroupField from "../../helpers/renderFormGroupField";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  requiredM,
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import renderFormSelect from "../../helpers/renderFormSelect";
import { TAMIL_NADU_DISTRICTS } from "../../constants/CommonConstant.ts";
import OrderService from "../../utils/OrderService.ts";
import { useNavigate } from "react-router-dom";

const CheckoutView = ({ handleSubmit, cartItems, totalPrice }) => {
 const navigate = useNavigate();

  const onSubmit = async (values) => {
    const user = localStorage.getItem("user");
    const userDetail = user ? JSON.parse(user) : null;
    if (!userDetail) {
    const orderRequest = {
      items: cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price
      })),
      shippingAddress: {
        name: values.name,
        mobileNo: values.mobileNo,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        landmark: values.landmark,
        city: values.city,
        state: values.state,
      },
      totalPrice: totalPrice,
      userId: userDetail.id
    }
    try {
      // Dispatch the create order action
      const result = await OrderService.createOrder(orderRequest);

      // Assuming result.payload contains the created order data
      if (result.payload && result.payload.orderId) {
        // Navigate to payment page with order ID
        navigate(`/payment/${result.payload.orderId}`);
      }
    } catch (error) {
      console.error('Order creation failed:', error);
      // Add error handling logic here
    }
  }
  };

  return (
    <div>
      <div className=" border-top p-4 text-black mb-3">
        <h1 className="display-6">Checkout</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-header">
                <i className="bi bi-envelope"></i> BILLING AND SHIPPING
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Field
                  name="name"
                  type="text"
                  component={renderFormGroupField}
                  placeholder="Full Name"
                  icon={IconPerson}
                  validate={[required("name")]}
                  required={true}
                  className="mb-3"
                />
                <Field
                  name="mobileNo"
                  type="text"
                  component={renderFormGroupField}
                  placeholder="Mobile number without country code"
                  icon={IconPhone}
                  validate={[requiredM, maxLengthMobileNo, minLengthMobileNo, digit]}
                  required={true}
                  className="mb-3"
                />

                <Field
                  name="addressLine1"
                  type="text"
                  component={renderFormGroupField}
                  placeholder="Flat, House no., Building, Company, Apartment"
                  icon={IconPhone}
                  validate={[required("address")]}
                  required={true}
                  className="mb-3"
                />
                <Field
                  name="adressLine2"
                  type="text"
                  component={renderFormGroupField}
                  placeholder="Area, Street, Sector, Village"
                  icon={IconPhone}
                  required={true}
                  className="mb-3"
                />
                <Field
                  name="landmark"
                  type="text"
                  component={renderFormGroupField}
                  placeholder="Eg: near apollo hospital"
                  icon={IconPhone}
                  className="mb-3"
                />
                <Field
                  name="city"
                  type="text"
                  component={renderFormGroupField}
                  placeholder="Town/City"
                  icon={IconPhone}
                  validate={[required("city")]}
                  required={true}
                  className="mb-3"
                />
                <Field
                  name="state"
                  type="text"
                  component={renderFormSelect}
                  placeholder="Select State"
                  icon={IconPhone}
                  validate={[required("state")]}
                  className="mb-3"
                  option={TAMIL_NADU_DISTRICTS}
                />
                <div className="card-footer border-info d-grid">
                  <button className="btn btn-info" type="submit">
                    Pay Now <strong>$162</strong>
                  </button>
                </div>
              </form>
              <div className="card mb-3 border-info">
                {/* <div className="card-header bg-info">
                <i className="bi bi-credit-card-2-front"></i> Payment Method
              </div> */}
                {/* <div className="card-body">
                <div className="row g-3 mb-3 border-bottom">
                  <div className="col-md-6">
                    <div className="form-check">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        defaultChecked
                        required
                      />
                      <label className="form-check-label" htmlFor="credit">
                        Credit card
                        <img
                          src="../../images/payment/cards.webp"
                          alt="..."
                          className="ms-3"
                          height={26}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="paypal">
                        PayPal
                        <img
                          src="../../images/payment/paypal_64.webp"
                          alt="..."
                          className="ms-3"
                          height={26}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name on card"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Card number"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Expiration month"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Expiration year"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div> */}
                <div className="card-footer border-info d-grid">
                  <button type="button" className="btn btn-info">
                    Pay Now <strong>$162</strong>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-cart3"></i> Cart{" "}
                  <span className="badge bg-secondary float-end">3</span>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product name</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$150</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Second product</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Third item</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$162</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
}

      export default compose(
      reduxForm({
        form: "checkoutForm",
  }))(CheckoutView);
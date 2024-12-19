import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconUser } from "bootstrap-icons/icons/person.svg";

import { useState } from "react";

const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
 // const [formData, setFormData] = useState({name: "w", phone: "", password: ""});


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
          <Field
            name="username"
            type="text"
            // label="First Name"
            component={renderFormGroupField}
            placeholder="Username"
            validate={[required, name]}
            required={true}
            className="mb-3"
            icon={IconUser}
          />
      <Field
        name="phoneNumber"
        type="number"
        // label="Mobile no"
        component={renderFormGroupField}
        placeholder="Mobile No without country code"
        icon={IconPhone}
        validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
        required={true}
        max="999999999999999"
        min="9999"
        className="mb-3"
      />
      <Field
        name="password"
        type="password"
        // label="Password"
        component={renderFormGroupField}
        placeholder="Password"
        icon={IconShieldLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Create
        </button>
      </div>
      {/* <Link className="float-start" to="/account/signin" title="Sign In">
        Already an User ? Login Here!!
      </Link> */}
      {/* <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link> */}
      {/* <div className="clearfix"></div> */}
      {/* <hr></hr> */}
      {/* <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className="col- text-center">
          <Link to="/" className="btn btn-light text-white bg-twitter me-3">
            <i className="bi bi-twitter-x" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-facebook">
            <i className="bi bi-facebook mx-1" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-google">
            <i className="bi bi-google mx-1" />
          </Link>
        </div>
      </div> */}
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signup",
  })
)(SignUpForm);

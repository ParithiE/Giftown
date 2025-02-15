import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";

const SignInForm = (props) => {
  const { handleSubmit, submitting, onSubmit } = props;
  const [otpLogin, setOtpLogin] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Field
        name="mobileNo"
        type="text"
        component={renderFormGroupField}
        placeholder="Mobile number without country code"
        icon={IconPhone}
        validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
        required={true}
        className="mb-3"
      />
      {!otpLogin && (
        <Field
          name="password"
          type="password"
          component={renderFormGroupField}
          placeholder="******"
          icon={IconShieldLock}
          validate={[required, maxLength20, minLength8]}
          required={true}
          maxLength="20"
          minLength="8"
          className="mb-3"
        />
      )}

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
        >
          Log In
        </button>

        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => setOtpLogin(!otpLogin)}
        >
         {!otpLogin ? "Log In with OTP" : "Log In with Password"}
        </button>
      </div>

      <Link className="float-start" to="/account/signup" title="Sign Up">
        Create your account
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>

      <div className="clearfix"></div>
      <hr />
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signin",
  })
)(SignInForm);

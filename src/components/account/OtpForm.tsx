import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderFormGroupField from '../../helpers/renderFormGroupField'
import { ReactComponent as IconShieldCheck } from "bootstrap-icons/icons/shield-check.svg";
import {
    required
} from "../../helpers/validation";
import { compose } from 'redux';

const OtpForm = ({ onSubmit }) => {
    return (
      <form onSubmit={onSubmit} noValidate>
        <Field
          name="otp"
          type="number"
          component={renderFormGroupField}
          placeholder="Enter otp"
          validate={[required]}
          required={true}
          className="mb-3"
          icon={IconShieldCheck}
        />
         <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
      </div>
      </form>
    );
  };
  

export default compose(
  reduxForm({
    form: "otp",
  })
)(OtpForm);

import React from "react";
const renderSelectOptions = (item) => (
  <option key={item.value} value={item.value} disabled={item.disabled}>
    {item.label}
  </option>
);
//export default function renderFormSelect({
const renderFormSelect = (props) => {
  const {
    input,
    label,
    tips,
    option,
    required,
    placeholder,
    meta: { touched, error, warning },
  } = props;
  const Icon = props.icon;
  // Transform the array into the required format
const districtOptions = option.map((district) => ({
  value: district.toLowerCase().replace(/\s+/g, '-'), // Convert to lowercase and replace spaces with hyphens
  label: district,
}));

districtOptions.unshift({
  value: '', // Empty value for the placeholder
  label: placeholder, // Placeholder text
});

  return (
      <div className={`form-group ${props.className}`}>
     {label && (
        <label
          className={`form-label ${required ? "required" : ""}`}
          htmlFor={input.name}
        >
          {label}
        </label>
      )}

      <div className="input-group">
        <span className="input-group-text">
          <Icon />
        </span>
      <select {...input} {...props} id={input.name}  className={`form-select ${ touched && error ? "is-invalid" : ""}  ${
        touched && !error ? "is-valid" : ""}`}>
        {districtOptions?.map(renderSelectOptions)}
      </select>
      {tips && <div className="form-text">{tips}</div>}
      {touched &&
        ((error && <div className="invalid-feedback">{error}</div>) ||
          (warning && <span>{warning}</span>))}
          </div>
          </div>
  );
};
export default renderFormSelect;

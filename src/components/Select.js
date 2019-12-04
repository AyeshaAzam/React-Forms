import React from "react";

//REACT FUNCTION COMPONENT: PROPS
const Select = ({ value, onChange, errors, onFocus, onBlur }) => (
  //console.log("Select props", props)
  <div>
    <label>
      Select your Country:
      <select
        name="selectCountry"
        className={
          errors.selectCountry ? "form-control is-invalid" : "form-control"
        }
        required
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <option value="select" selected>
          {" "}
          Select Country{" "}
        </option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="BangLadesh">Bangladesh</option>
        <option value="dub">Dubai</option>
        <option value="Sweden">Sweden</option>
        <option value="dan">Danmark</option>
        <option value="usa">USA</option>
        <option value="aus">Australia</option>
      </select>
    </label>
    {errors.selectCountry && (
      <div className="invalid-feed">{errors.selectCountry}</div>
    )}
  </div>
);

export default Select;

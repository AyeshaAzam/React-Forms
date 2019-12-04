import React from "react";

class SelectGender extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label>Your Gender:</label>{" "}
        <label htmlFor="selectGender">
          <input
            type="radio"
            checked={this.props.value === "Male"}
            onChange={this.props.onChange}
            value="Male"
            name="selectGender"
          />{" "}
          Male
          <input
            type="radio"
            checked={this.props.value === "Female"}
            onChange={this.props.onChange}
            value="Female"
            name="selectGender"
          />{" "}
          Female
          <input
            type="radio"
            checked={this.props.value === "Other"}
            onChange={this.props.onChange}
            value="Other"
            name="selectGender"
          />{" "}
          Other
        </label>
      </div>
    );
  }
}

export default SelectGender;

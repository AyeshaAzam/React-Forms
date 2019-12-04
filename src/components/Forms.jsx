import React from "react";
import SelectGender from "./Gender";
import Select from "./Select";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    //creating ref
    this.formRef = React.createRef();
  }

  state = {
    userNameField: "",
    userAgeField: "",
    userEmailField: "",
    selectGender: "",
    comment: "",
    selectCountry: "",
    errors: {
      userNameField: "",
      userAgeField: "",
      userEmailField: "",
      selectGender: "",
      comment: "",
      selectCountry: ""
    },
    touched: ""
  };

  onChangeHandler = event => {
    //const {name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;

    this.setState(prevState => {
      // console.log("name: ", name);
      // console.log("value:", value);
      prevState[name] = value;
      return prevState;
    });
  };

  //reset all the fields
  resetHandler = e => {
    e.preventDefault();
    this.setState({
      userNameField: "",
      userAgeField: "",
      userEmailField: "",
      selectGender: "",
      comment: "",
      selectCountry: ""
    });
  };

  validate = () => {
    const errors = {};

    const {
      userNameField,
      userAgeField,
      userEmailField,
      selectCountry
    } = this.state;
    if (!userNameField) {
      errors.userNameField = "Please Provide Valid Name";
    }
    if (!userAgeField) {
      errors.userAgeField = "Please Provide Valid Age";
    }
    if (!userEmailField) {
      errors.userEmailField = "Please Provide Valid Email";
    }

    if (!selectCountry) {
      errors.selectCountry = "Please Select Valid Country";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };

  submitHandler = event => {
    event.preventDefault();

    console.log(this.state);

    const { errors, isValid } = this.validate();

    if (!isValid) {
      this.setState({
        errors: { ...this.state.errors, ...errors }
      });
    } else {
      alert(
        `You have now submitted your info: "${JSON.stringify(this.state)}"`
      );
      this.formRef.current.reset();
      //event.target.reset(); //not working for me ????
    }
  };

  focusHandler = event => {
    const name = event.target.name;
    //const value = event.target.value;

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: ""
      }
    });
  };

  blurHandler = event => {
    const { errors, isValid } = this.validate();

    if (!isValid) {
      this.setState({
        errors: { ...this.state.errors, ...errors }
      });
    }
  };

  render() {
    const { userNameField, errors } = this.state;
    console.log("my state", this.state);
    return (
      <form
        ref={this.formRef}
        onSubmit={this.submitHandler}
        onReset={this.resetHandler}
      >
        <h5>Please fill the for below</h5>
        <div className="form-group">
          <label htmlFor="userNameField">Enter Name: </label>
          <input
            type="text"
            name="userNameField"
            className={
              errors.userNameField ? "form-control is-invalid" : "form-control"
            }
            placeholder="Ex.Anna Smith"
            value={userNameField}
            onChange={this.onChangeHandler}
            onFocus={this.focusHandler}
            onBlur={this.blurHandler}
          />
          {errors.userNameField && (
            <div className="invalid-feed">{errors.userNameField}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="userAgeField">Enter Age: </label>
          <input
            type="text"
            name="userAgeField"
            className={
              errors.userAgeField ? "form-control is-invalid" : "form-control"
            }
            placeholder="Ex.23"
            value={this.state.userAgeField}
            onChange={this.onChangeHandler}
            onFocus={this.focusHandler}
            onBlur={this.blurHandler}
          />
          {errors.userAgeField && (
            <div className="invalid-feed">{errors.userAgeField}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="userEmailField">Enter Email: </label>
          <input
            type="email"
            name="userEmailField"
            className={
              errors.userEmailField ? "form-control is-invalid" : "form-control"
            }
            placeholder="Ex.anna@gmail.com"
            value={this.state.userEmailField}
            onChange={this.onChangeHandler}
            onFocus={this.focusHandler}
            onBlur={this.blurHandler}
          />
          {errors.userEmailField && (
            <div className="invalid-feed">{errors.userEmailField}</div>
          )}
        </div>
        <SelectGender
          value={this.state.selectGender}
          onChange={this.onChangeHandler}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />

        <Select
          value={this.state.selectCountry}
          onChange={this.onChangeHandler}
          errors={this.state.errors}
          onFocus={this.focusHandler}
          onBlur={this.blurHandler}
        />

        <input
          className="btn btn-success"
          type="button"
          value="Submit"
          onClick={this.submitHandler}
          // focusHandler={this.focusHandler}
          // blurHandler={this.blurHandler}
        />
      </form>
    );
  }
}

export default Forms;

//read this article
//https://www.robinwieruch.de/react-function-component
//REACT FUNCTION COMPONENT: PROPS
//Since props are always coming as object,

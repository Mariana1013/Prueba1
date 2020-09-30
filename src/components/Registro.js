import React from "react";
import { Link, withRouter } from "react-router-dom";

import Navegation from "../components/Navegation";

const Registro = (props) => {
  const { history } = props;
  return (
    <div>
      <Navegation />
      <div className="container">
        <h2>Form Validation</h2>
        <p>
          In this example, we use <code>.was-validated</code> to indicate what's
          missing before submitting the form:
        </p>
        <form action="/action_page.php" className="was-validated">
          <div className="form-group">
            <label for="uname">Username:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter username"
              name="uname"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                required
              />{" "}
              I agree on blabla.
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Check this checkbox to continue.
              </div>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => history.push("/Card")}
          >
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={() => history.goBack("/")}
          >
            back
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Registro);

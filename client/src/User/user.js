import React, { useState } from "react";
import { Navigate , Link} from "react-router-dom";
import {login, authenticate, isAuthenticated} from "./UserApi"

import { Form, Container, Button , Row, Col} from "react-bootstrap";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  //const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value }); //[name] is dynamic i.e name, email, password
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    login({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const loginForm = () => (
    <section className="section">
    <div className="container center">
    <div className="row justify-content-between">
      <div className="col-md-8 col-lg-6 offset-lg-2">
      <div className="bg-light p-5  border shadow">
        {/* Login Form */}
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange("email")}
              value={email}
            />
            <p className="form-text text-end">Enter Valid Email</p>
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={handleChange("password")}
              value={password}
            />
            <p className="form-text text-end">Enter Valid Password</p>
          </div>
          <div className="mb-4 form-check w-100">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" /> Remember Me
            </label>
            <Link to="" className="float-end">
              Reset Password
            </Link>
          </div>
          
          <button type="submit" className="btn btn-primary w-100 my-3 shadow" onClick={clickSubmit}>
            Login
          </button>
          <p className="text-center m-0">
            Not yet account, <Link to="/signup" >Please Signup</Link>
          </p>
        </form>
        {/* Login Form */}
      </div>
    </div>
    </div>
    </div>
</section>
  
  );
  const showError = () => (
    <div className={error && error ? "alert alert-danger" : "none"}>
      {error}
    </div>
    // <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>{error}</div>
    //  style={{ display: error ? "" : "none" }}
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

    const redirectUser = () => {
       

        if (isAuthenticated()) {
          return <Navigate to="/vastipatrak" />;
        }
      };

  

  return (
   <div>
       
      {showLoading()}
      {showError()}
      
      {loginForm()}
      {redirectUser()}
     
      
      </div>
   
  );
};


export default Login;

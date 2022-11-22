import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import adminApi from "../../../api/admin/index";
import { getAdminToken } from "../../../utils/getTokens";


import { setAdminLoginDetails } from "../../../store/reducer/admin";

const initialState = {
  mail: "",
  password: "",
};

function Auth() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const history = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await adminApi.adminSignIn(form).then((response) => {
      if (response.status === 200) {
        const {result, token} = response.data
        const data = {
          id: result._id,
          email: result.mail,
          token: token,
        };
        dispatch(setAdminLoginDetails(data))
        history("/profileTable");
      }
    });
  };
  return (
    <section id="wrapper">
      <div className="login-register" style={{ position: "relative", backgroundColor: "#1976d2" }}>
        <div className="login-box card">
          <div className="card-body">
            <form
              className="form-horizontal form-material"
              onSubmit={handleSubmit}
            >
              <h3 className="box-title m-b-20">Admin Log In</h3>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="text"
                    required=""
                    name="mail"
                    placeholder="Please Enter Your Email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="password"
                    required=""
                    name="password"
                    placeholder="Please Enter Your Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button
                    className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;

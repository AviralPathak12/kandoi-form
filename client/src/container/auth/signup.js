import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import clientApi from "../../api/client/index";
import { setClientLoginDetails } from "../../store/reducer/client";
import { useNavigate } from "react-router";

const initialState = {
  mobile: "",
  otp :  ""
};

function Signup() {
  const [form, setForm] = useState(initialState);
  const [otpField, setOtpField] = useState(0);

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(otpField === 0){
      clientApi.clientSignIn(form).then((response) => {
        if (response.status === 200) {
          const { result} = response.data;
          // const data = {
          //   id: result._id,
          //   mobile: result.mobile,
          // };
          // dispatch(setClientLoginDetails(data));
  
          setOtpField(1);
  
          // history("/user-profile-show?user=" + result._id);
        }
      }).catch(err => alert("Please enter correct Mobile Number"))
    }else{
      clientApi.otpVerify(form).then((response) => {
        if (response.status === 200) {
          const { result,token,mobile} = response.data;
          const data = {
            id: result._id,
            mobile: mobile,
            token : token
          };
          dispatch(setClientLoginDetails(data));
  
          // setOtpField(1);
  
          history("/user-profile-show?user=" + result._id);
        }
      }).catch(err => alert("Please enter correct Mobile Number"))
    }

    
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
              <h3 className="box-title m-b-20">Log In</h3>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input
                    className="form-control"
                    type="number"
                    required=""
                    name="mobile"
                    placeholder="Please Enter Your Number"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {otpField === 1 && (
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      className="form-control"
                      type="number"
                      required
                      name="otp"
                      placeholder="Please Enter OTP"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button
                    className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                    type="submit"
                  >
                    {otpField === 1 ? "Submit" : "Get OTP"}
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

export default Signup;

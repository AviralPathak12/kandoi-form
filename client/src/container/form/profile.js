import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import clientApi from "../../api/client";

function Profile() {
  const [relation, setRelation] = useState([]);
  const [familyName, setfamilyName] = useState("");
  const [loginMobile, setloginMobile] = useState("");

  const [inputFields, setInputFields] = useState([
    {
      relation: "",
      name: "",
      dob: "",
      mobile: "",
      education: "",
      marraigeDate: "",
      wifeName: "",
      wifeDOB: "",
      wifeEducation: "",
      wifeMobile: "",
      inLawFamilyName: "",
      inLawAddress: "",
      inLawState: "",
      inLawCity: "",
      inLawPinCode: "",
      inLawDistrict: "",
    },
  ]);

  const history = useNavigate();

  const handleChange = (index, event) => {
    
    let data = [...inputFields];
    if(event.target.name === "mobile" || event.target.name === "wifeMobile") {
      event.target.value = event.target.value.slice(0, 10);
      data[index][event.target.name] = event.target.value;
    }else{
      data[index][event.target.name] = event.target.value;
    }
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = {
      relation: "",
      name: "",
      dob: "",
      mobile: "",
      education: "",
      marraigeDate: "",
      wifeName: "",
      wifeDOB: "",
      wifeEducation: "",
      wifeMobile: "",
      inLawFamilyName: "",
      inLawAddress: "",
      inLawState: "",
      inLawCity: "",
      inLawPinCode: "",
    };

    setInputFields([...inputFields, newfield]);
  };

  const handleRelation = (index, event) => {
    let data = event.target.value;

    if (index in relation) {
      let oldData = relation.slice();
      oldData[index] = data;
      setRelation(oldData);
    } else {
      setRelation([...relation, data]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      familyName: familyName,
      loginMobile: loginMobile,
      list: inputFields,
    };

    clientApi.createProfile(payload).then((response) => {
      if(response.status===201){
        history("/signup");
      }
    });
  };

  return (
    <div id="main-wrapper">
      {/* <div className="page-wrapper"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-outline-info">
              <div className="card-header">
                <h4 className="m-b-0 text-white">KANDOI (SUKHADIYA) PARIVAR</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row p-t-20">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label required-field">
                          Family Name
                        </label>
                        <input
                          type="text"
                          name="familyName"
                          maxLength={50}
                          className="form-control"
                          placeholder="Please Enter Your Name"
                          required
                          onChange={(e) => {
                            setfamilyName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label required-field">
                          Login Number
                        </label>
                        <input
                          type="number"
                          name="loginNumber"
                          className="form-control"
                          placeholder="Please Enter Number"
                          required
                          onChange={(e) => {
                            e.target.value = e.target.value.slice(0, 10);
                            setloginMobile(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {inputFields.map((input, index) => {
                    return (
                      <div className="form-body" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Relation</label>
                            <select
                              className="form-control custom-select"
                              name="relation"
                              data-placeholder="Choose a Relation"
                              onChange={(event) => {
                                handleRelation(index, event);
                                handleChange(index, event);
                              }}
                            >
                              <option value="">Select a Relation</option>
                              <option value="Family Head">Family Head</option>
                              <option value="Father/Mother">
                                Father/Mother
                              </option>
                              <option value="Son">Son</option>
                              <option value="GrandSon">GrandSon</option>
                              <option value="GrandDaughter">
                                GrandDaughter
                              </option>
                              <option value="Daughter">Daughter</option>
                              <option value="Home Address">Home Address</option>
                              <option value="Business Address">
                                Business Address
                              </option>
                            </select>
                          </div>
                        </div>
                        {relation[index] === "Home Address" ||
                        relation[index] === "Business Address" ? null : (
                          <>
                            <h3 className="card-title">Person Info</h3>
                            <hr />
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Your Name"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Date Of Birth
                                  </label>
                                  <input
                                    type="date"
                                    id="lastName"
                                    name="dob"
                                    className="form-control"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Mobile
                                  </label>
                                  <input
                                    type="number"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Please Enter Mobile Number"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Education
                                  </label>
                                  <input
                                    type="text"
                                    name="education"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Your Education"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Marraige Date
                                  </label>
                                  <input
                                    type="date"
                                    id="lastName"
                                    name="marraigeDate"
                                    className="form-control"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {relation[index] === "Home Address" ||
                        relation[index] === "Business Address" ||
                        relation[index] === "Daughter" ? null : (
                          <>
                            <h3 className="box-title m-t-40">Wife Info</h3>
                            <hr />
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Wife Name
                                  </label>
                                  <input
                                    type="text"
                                    name="wifeName"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Name"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Wife Date Of Birth
                                  </label>
                                  <input
                                    type="date"
                                    name="wifeDOB"
                                    className="form-control"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Wife Mobile
                                  </label>
                                  <input
                                    type="number"
                                    name="wifeMobile"
                                    className="form-control"
                                    placeholder="Please Enter Mobile Number"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Wife Education
                                  </label>
                                  <input
                                    type="text"
                                    name="wifeEducation"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Education"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            <h3 className="box-title m-t-40">In Law Info</h3>
                            <hr />
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    In Law Family Name
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawFamilyName"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Name"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    In Law Address
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawAddress"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Address"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    In Law State
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawState"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter State"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    In Law City
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawCity"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter City"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    In Law Pin Code
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawPinCode"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Pin Code"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {(relation[index] === "Home Address" ||
                          relation[index] === "Business Address") && (
                          <>
                            <h3 className="box-title m-t-40">Address Info</h3>
                            <hr />
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawAddress"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Address"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">State</label>
                                  <input
                                    type="text"
                                    name="inLawState"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter State"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    District
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawDistrict"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter District"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row p-t-20">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">City</label>
                                  <input
                                    type="text"
                                    name="inLawCity"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter City"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">
                                    Pin Code
                                  </label>
                                  <input
                                    type="text"
                                    name="inLawPinCode"
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Pin Code"
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                  <div className="form-group text-center m-t-20">
                    <div className="col-xs-6">
                      <button
                        className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <div className="form-group text-center m-t-20">
                  <div className="col-xs-12">
                    <button
                      className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                      onClick={addFields}
                    >
                      Add More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Profile;

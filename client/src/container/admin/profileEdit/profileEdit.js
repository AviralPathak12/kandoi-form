import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import adminApi from "../../../api/admin/index";
import AdminLogout from "../auth/logout";

function ProfileEdit() {
  const [profileShow, setProfileShow] = useState([]);
  const [familyName, setfamilyName] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("user");

  const callShowProfile = async () => {
    await adminApi.showProfile(id).then((response) => {
      setProfileShow(response.data.profile);
      setfamilyName(response.data.familyName);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      familyName: familyName,
      list: profileShow,
    };

    await adminApi.updateProfile(id,payload).then(navigate("/profileTable"));
  };

  const handleChange = (index, event) => {
    let data = [...profileShow];
    if(event.target.name === "mobile" || event.target.name === "wifeMobile") {
      event.target.value = event.target.value.slice(0, 10);
      data[index][event.target.name] = event.target.value;
    }else{
      data[index][event.target.name] = event.target.value;
    }
    setProfileShow(data);
  };

  const addFields = () => {
    let newfield = {
      familyName: "",
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
    setProfileShow([...profileShow, newfield]);
  };

  useEffect(() => {
    callShowProfile();
  }, [id]);

  return (
    <div id="main-wrapper">
      {/* <div className="page-wrapper"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-outline-info">
              <div className="card-header">
                <h4 className="m-b-0 text-white">Profile Edit</h4>
                <AdminLogout page="toShowWhite"/>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="col-md-4">
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
                        value={familyName ? familyName : ''}
                        required
                        onChange={(event) => setfamilyName(event.target.value)}
                      />
                    </div>
                  </div>
                  {profileShow?.map((value, index) => {
                    return (
                      <div className="form-body" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Relation</label>
                            <select
                              className="form-control custom-select"
                              name="relation"
                              data-placeholder="Choose a Relation"
                              value={value.relation}
                              onChange={(event) => {
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
                        {value.relation === "Home Address" ||
                        value.relation === "Business Address" ? null : (
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
                                    value={value.name}
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
                                    value={value.dob}
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
                                    maxLength={50}
                                    className="form-control"
                                    placeholder="Please Enter Mobile Number"
                                    value={value.mobile}
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
                                    value={value.education}
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
                                    value={value.marraigeDate}
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {value.relation === "Home Address" ||
                        value.relation === "Business Address" ||
                        value.relation === "Daughter" ? null : (
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
                                    value={value.wifeName}
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
                                    id="lastName"
                                    name="wifeDOB"
                                    className="form-control"
                                    value={value.wifeDOB}
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
                                    value={value.wifeMobile}
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
                                    value={value.wifeEducation}
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
                                    value={value.inLawFamilyName}
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
                                    value={value.inLawAddress}
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
                                    value={value.inLawState}
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
                                    value={value.inLawCity}
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
                                    value={value.inLawPinCode}
                                    onChange={(event) =>
                                      handleChange(index, event)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {(value.relation === "Home Address" ||
                          value.relation === "Business Address") && (
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
                                    value={value.inLawAddress}
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
                                    value={value.inLawState}
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
                                    value={value.inLawDistrict}
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
                                    className="form-control"
                                    maxLength={50}
                                    placeholder="Please Enter City"
                                    value={value.inLawCity}
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
                                    value={value.inLawPinCode}
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

export default ProfileEdit;

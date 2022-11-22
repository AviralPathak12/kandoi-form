import React, { useState, useEffect } from "react";

import { Link, useSearchParams } from "react-router-dom";
import adminApi from "../../api/admin/index";
import { useSelector, useDispatch } from "react-redux";
import ProfileHeader from "./header";

function UserProfileShow() {
  const [profileShow, setProfileShow] = useState([]);
  const [searchParams] = useSearchParams();
  // const id = useSelector((state) => state.client.id);
  // const id = "632f20a8b7bbe42a72d6e3d9";
  const id = searchParams.get("user");

  const callShowProfile = async () => {
    await adminApi.showProfile(id).then((response) => {
      setProfileShow(response.data);
    });
  };

  useEffect(() => {
    callShowProfile();
  }, []);

  return (
    <div id="main-wrapper">
      {/* <header className="topbar">
        
      </header> */}
      {/* <div className="page-wrapper"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-outline-info">
              <div className="card-header">
                <h4 className="m-b-0 text-white">Profile View</h4>
                <ProfileHeader/>
                {profileShow?.approved === 1 && (
                  <Link
                    to={`/user-profile-table`}
                    style={{ float: "right", color: "white", paddingRight:"2%" }}
                  >
                    Profile Directory
                  </Link>
                )}
              </div>
              <div className="card-body">
                <form
                //  onSubmit={handleSubmit}
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="control-label required-field">
                        Family Name
                      </label>
                      <input
                        type="text"
                        name="familyName"
                        className="form-control"
                        placeholder="Please Enter Your Name"
                        required
                        value={profileShow?.familyName}
                        disabled={true}
                      />
                    </div>
                  </div>
                  {profileShow?.profile?.map((value, index) => {
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
                              disabled={true}
                              //  onChange={(event) => {
                              //    handleRelation(index, event);
                              //    handleChange(index, event);
                              //  }}
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
                                    className="form-control"
                                    placeholder="Please Enter Your Name"
                                    value={value.name}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    id="lastName"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Please Enter Mobile Number"
                                    value={value.mobile}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Your Education"
                                    value={value.education}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    disabled={true}

                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Name"
                                    value={value.wifeName}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Education"
                                    value={value.wifeEducation}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Name"
                                    value={value.inLawFamilyName}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Address"
                                    value={value.inLawAddress}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter State"
                                    value={value.inLawState}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter City"
                                    value={value.inLawCity}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Pin Code"
                                    value={value.inLawPinCode}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Address"
                                    value={value.inLawAddress}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="control-label">State</label>
                                  <input
                                    type="text"
                                    name="inLawState"
                                    className="form-control"
                                    placeholder="Please Enter State"
                                    value={value.inLawState}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter District"
                                    value={value.inLawDistrict}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    placeholder="Please Enter City"
                                    value={value.inLawCity}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
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
                                    className="form-control"
                                    placeholder="Please Enter Pin Code"
                                    value={value.inLawPinCode}
                                    disabled={true}
                                    //  onChange={(event) =>
                                    //    handleChange(index, event)
                                    //  }
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default UserProfileShow;

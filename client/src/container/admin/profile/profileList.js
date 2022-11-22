import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import adminApi from "../../../api/admin/index";
import AdminLogout from "../auth/logout";

function ProfileTable() {
  const [profiles, setProfiles] = useState([]);
  const [approvedProfiles, setApprovedProfiles] = useState([]);

  const getProfileList = async () => {
    await adminApi.profileList().then((response) => {
      setProfiles(response.data);
    });
  };

  const getApprovedProfileList = async () => {
    await adminApi.approvedProfileList().then((response) => {
      setApprovedProfiles(response.data);
    });
  };

  const handleApprove = async (id) => {
    await adminApi.approveProfile(id).then((response) => {
      setProfiles(response.data);
      getProfileList();
      getApprovedProfileList();
    });
  };

  const handleDelete = async (id) => {
    await adminApi.deleteProfile(id).then((response) => {
      setProfiles(response.data);
      alert("Profile Deleted.");
    });
  };

  useEffect(() => {
    getProfileList();
    getApprovedProfileList();
  }, []);

  return (
    <div id="main-wrapper">
      {/* <div className="page-wrapper"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Profiles List</h4>
                <AdminLogout/>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>S.NO.</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Date of Birth</th>
                        <th>Education</th>
                        <th className="text-nowrap">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profiles.map((profile, index) => (
                        <tr key={profile._id}>
                          <td>{index + 1}</td>
                          <td>{profile.profile[0].name}</td>
                          <td>{profile.profile[0].mobile}</td>
                          <td>
                            {profile.profile[0].dob
                              ? moment(profile.profile[0].dob).format(
                                  "DD/MM/YYYY"
                                )
                              : ""}
                          </td>
                          <td>{profile.profile[0].education}</td>
                          <td>
                            <Link
                              style={{ color: "white" }}
                              to={"/profile-show?user=" + profile._id}
                            >
                              <button
                                type="button"
                                className="btn btn-info"
                                style={{ marginRight: "1%" }}
                              >
                                Show
                              </button>
                            </Link>
                            <Link
                              style={{ color: "white" }}
                              to={"/profile-edit?user=" + profile._id}
                            >
                              <button
                                type="button"
                                className="btn btn-warning"
                                style={{ marginRight: "1%" }}
                              >
                                Edit
                              </button>
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleApprove(profile._id)}
                              className="btn btn-success"
                              style={{ marginRight: "1%" }}
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(profile._id)}
                              className="btn btn-danger"
                              style={{ marginRight: "1%" }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Approved Profiles List</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>S.NO.</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Date of Birth</th>
                        <th>Education</th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvedProfiles?.map((profile, index) => (
                        <tr key={profile._id}>
                          <td>{index + 1}</td>
                          <td>{profile.profile[0].name}</td>
                          <td>{profile.profile[0].mobile}</td>
                          <td>
                            {profile.profile[0].dob
                              ? moment(profile.profile[0].dob).format(
                                  "DD/MM/YYYY"
                                )
                              : ""}
                          </td>
                          <td>{profile.profile[0].education}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default ProfileTable;

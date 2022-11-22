import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import adminApi from "../../api/admin/index";
import ProfileHeader from "./header";

function UserProfileTable() {

  const [approvedProfiles, setApprovedProfiles] = useState([]);

  const getApprovedProfileList = async () => {
    await adminApi.approvedProfileList().then((response) => {
      setApprovedProfiles(response.data);
    });
  };

  useEffect(() => {
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
                <h4 className="card-title">Approved Profiles List</h4>
                <ProfileHeader page="list"/>
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
                      {approvedProfiles.map((profile, index) => (
                        <tr key={profile._id}>
                          <td>{index + 1}</td>
                          
                          <td><Link style={{color:"black"}} to={"/user-profile-show?user=" + profile._id}>{profile.profile[0].name}</Link></td>
                          
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

export default UserProfileTable;

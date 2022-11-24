import React, { useState, useEffect } from "react";
import moment from "moment";
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
      {/* <div className="page-wrapper"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Profile View</h4>
                <ProfileHeader page="list"/>
                {profileShow?.approved === 1 && (
                  <Link
                    to={`/user-profile-table`}
                    style={{ float: "right", color: "white", paddingRight:"2%" }}
                  >
                    Profile Directory
                  </Link>
                )}
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Family Name / City</th>
                        <th>S.NO.</th>
                        <th>Full Name</th>
                        <th>Family Relation</th>
                        <th>DOB</th>
                        <th>Education</th>
                        <th>Marraige</th>
                        <th>Mobile Number</th>
                        <th>In-Law Family Name/Address</th>
                        <th>Occupation</th>
                        <th>Home Address</th>
                      </tr>
                    </thead>
                    <tbody>
                    {profileShow?.profile?.map((value, index) => {
                        return(
                          <tr key={index}>
                          <td>{index === 0 ? profileShow?.familyName : ""} {value.relation === "Home Address" ? value.inLawCity : ""}</td>
                          <td>{index + 1}</td>
                          <td>{value.name}</td>
                          <td>{value.relation}</td>
                          <td>{moment(value.dob).format("DD/MM/YYYY")}</td>
                          <td>{value.education}</td>
                          <td>{value.marraigeDate ? "Yes" : "No"}</td>
                          <td>{(value.relation === "Daughter" || value.relation === "Wife") ? "" : value.mobile}</td>
                          <td>{value.inLawFamilyName} {value.inLawAddress}</td>
                          <td>{value.relation === "Business Address" ? value.inLawAddress : ""}</td>
                          <td>{value.relation === "Home Address" ? value.inLawAddress : ""}</td>
                        </tr>
                        )
                        
                    })}
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

export default UserProfileShow;

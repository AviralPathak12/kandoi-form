import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import adminApi from "../../api/admin/index";
// import AdminLogout from "/auth/logout";

function AdminNewsList() {

  const [newsList, setNewsList] = useState([]);

  const getListNews = async () => {
    await adminApi.listNews().then((response) => {
        setNewsList(response.data);
    });
  };

  const handleDelete = async (id) => {
    await adminApi.deleteNews(id).then((response) => {
        setNewsList(response.data);
      alert("News Deleted.");
    });
  };

  useEffect(() => {
    getListNews();
  }, []);

  return (
    <div id="main-wrapper">
      {/* <div className="page-wrapper"> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">News List</h4>
                {/* <AdminLogout/> */}
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>S.NO.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th className="text-nowrap">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newsList.map((news, index) => (
                        <tr key={news._id}>
                          <td>{index + 1}</td>
                          <td>{news.title}</td>
                          <td>{news.description}</td>
                          <td>{news.type}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() => handleDelete(news._id)}
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
      </div>
      {/* </div> */}
    </div>
  );
}

export default AdminNewsList;

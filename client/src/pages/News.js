import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import adminApi from "../api/admin";


const News = () => {

  const [newsShow, setNewsShow] = useState([])
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const showNews = async () => {
    await adminApi.showNews(id).then((response) => {
      setNewsShow(response.data);
    });
  };

  useEffect(() => {
    showNews()
  },[])

  return (
    <div>
      <section>
        <div className="container justify-content-center">
          <div className="row">
            <img
              width="600"
              height="400"
              src={`https://kspall.s3.ap-south-1.amazonaws.com/${newsShow.image}`}
              alt="mataji-1"
            />
          </div>
          <div className="row">
            <h3>{newsShow.title}</h3>
          </div>
          <div className="row">
            <p>{newsShow.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

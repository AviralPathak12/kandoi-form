import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNews } from "./Api";
import { useSearchParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { Container, Row, Col, CardGroup, CardColumns } from "react-bootstrap";

const NewsList = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [newsByArrival, setNewsByArrival] = useState([]);
  const type = searchParams.get("type");

  const loadNewsByArrival = () => {
    getNews(type).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setNewsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadNewsByArrival();
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          {newsByArrival.map((news, i) => (
            <Link to={"/news?id=" + news._id} style={{backgroundColor: "white",border: "3px solid black", marginTop:"1%"}}>
              <div
                className="col-lg-6 col-md-5 col-sm-6 p-2"
                style={{ flexDirection: "row", display: "flex" }}
                key={i}
              >
                  <img
                    width="100"
                    height="100"
                    src={`https://kspall.s3.ap-south-1.amazonaws.com/${news.image}`}
                    alt=""
                  />

                <div className="m-l-5">
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                  <p>{moment(news.createdAt).format("hh:mm A DD/MM/YYYY")}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsList;

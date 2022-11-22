import React, { useState, useEffect } from "react";

import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { createNews}  from "../../admin/AdminApi";
import adminApi from "../../api/admin/index";

const AddNews = () => {
  // destructure user and token from localstorage

  const [values, setValues] = useState({
    title: "",
    description: "",
    type: "",
    image: "",
    error: "",
    success: false,
  });

  const { title, description, type, image, success, error } = values;

  const handleChange = (name) => (event) => {
    if (name === "image") {
      setValues({ ...values, error: false, [name]: event.target.files[0] });
    } else {
      setValues({ ...values, error: false, [name]: event.target.value });
    }
  };

  const history = useNavigate();

  const clickSubmit = (event) => {
    // console.log("values", values);
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('type', values.type);
    formData.append('image', values.image);
    adminApi.createNews(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        history("/news/list");
      }
    });
  };

  const newPostForm = () => (
    <Container>
      <Form action="/uploadsingle" className="mb-3" onSubmit={clickSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={handleChange("title")}
            placeholder="title of News"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={handleChange("description")}
            placeholder="some description about cnews.."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select value={type} onChange={handleChange("type")}>
            <option>Select Type</option>
            <option value="News">News</option>
            <option value="Shubh Karya">Shubh Karya</option>
            <option value="Shok Sandesh">Shok Sandesh</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="my-4" controlId="formFile">
          <Form.Label className="btn btn-primary">
            <Form.Control
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleChange("image")}
            />
          </Form.Label>
        </Form.Group>

        <Button className="my-4" variant="outline-primary" type="submit">
          {" "}
          Submit{" "}
        </Button>
      </Form>
    </Container>
  );

  // const showSuccess = () => (
  //       <div className={createdCourse && createdCourse ? "alert alert-info" : "none"}>
  //    { createdCourse &&  <h2> {`${createdCourse}`} is created. Click to add lectures</h2>}
  //    {/* {`${createdCourse}`} */}
  //   </div>
  // );

  // const showError = () => (
  //   <div className={ error && error ? "alert alert-danger" : "none"} >{error}</div>

  // );

  // const showLoading = () =>
  //   loading && (
  //     <div className="alert alert-success">
  //       <h2>UpLoading...</h2>
  //     </div>
  //   );

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {/* {showError()} */}
        {/* {showSuccess()} */}
        {/* {showLoading()} */}
        {newPostForm()}
      </div>
    </div>
  );
};

export default AddNews;

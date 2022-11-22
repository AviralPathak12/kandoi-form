import React, { useState } from "react";

const HomeAddress = () => {
  const [inputFields, setInputFields] = useState([
    {
      Address: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
    },
  ]);

  const addHomeFields = (event) => {
    event.preventDefault();
    setInputFields([
      ...inputFields,
      {
        Address: "",
        state: "",
        district: "",
        city: "",
        pincode: "",
      },
    ]);
  };
  const removeHomeFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  // const handleChange = (index, evnt) => {
  //   const { name, value } = evnt.target;
  //   const list = [...inputFields];
  //   list[index][name] = value;
  //   setInputFields(list);
  // };

  const handleChange = (name) => (event) => {

    setInputFields({...inputFields, [name]: event.target.value})

  };

  






  const HomeForm = () => (
    <form action="" className="row g-3 mr-4 ml-4">
      {inputFields.map((data, index) => {
        const { FirstName, LastName, FathersName } = data;
        return (
          <div className="row my-3" key={index}>
            <hr
              className="bg-danger"
              style={{ height: "6px", width: "100%", color: "#d63384" }}
            />
            <h2 className="fw-bold text-center"> Home Address</h2>

            <div className="col-md-12">
              <label htmlFor="inputEducation4" className="form-label">
                Address
              </label>
              <input
                type="text"
                onChange={handleChange('homeAddress')}
                className="form-control"
                id="inputEducation"
                
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputEducation4" className="form-label">
                State
              </label>
              <input type="text" onChange={handleChange('homeState')} className="form-control" id="inputEducation" />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputEducation4" className="form-label">
                District
              </label>
              <input type="text" onChange={handleChange('homeDistrict')} className="form-control" id="inputEducation" />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" onChange={handleChange('homeCity')} className="form-control" id="inputCity" />
            </div>

            <div className="col-md-2">
              <label
                htmlFor="inputPincode"
                className="form-label"
                maxLength="6"
                minLength="6"
              >
                Pincode
              </label>
              <input type="text" onChange={handleChange('homePincode')} className="form-control" id="inputPincode" />
            </div>

            <div className="col m-4 justify-content-center">
              {inputFields.length !== 1 ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={removeHomeFields}
                >
                  <i className="bi bi-x-square-fill"> cancel </i>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      <div className="row m-2">
        <div className="col-sm-12 mt-2">
          <label htmlFor="inputshopName" className="form-label">
            Add More Home Address
          </label>
          <button
            className="btn btn-outline-success m-2 p-2"
            onClick={addHomeFields}
          >
            <i className="bi bi-plus-square-fill"> Add More Home Address</i>{" "}
          </button>
        </div>
      </div>

      <div className="col-12 text-center  m-8">
            <button type="submit" className="btn btn-primary p-4">
              Submit
            </button>
          </div>



    </form>
  );










  return (
    <section>
      <div className="container">
        {HomeForm()}
        {JSON.stringify(inputFields)}
        </div>
    </section>
  );
};

export default HomeAddress;

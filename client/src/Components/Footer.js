import React from 'react'

const Footer = () => {
  return (
    <div>
    <section>
    {/* =======================
  Footer START */}
    <footer className="bg-dark p-4 mt-4 ">
      <div className="container">
        <div className="row align-items-center ">
          {/* Widget */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            {/* Logo START */}
            
            <div className="logo">
        <img src={require("../Media/ksplogo.png")} className="img-fluid rounded mx-auto d-block" height="20px" width="40px" alt="logo" />
      </div>
              {/* {" "}
              <img
                className="h-20px w-30px"
                src="../Media/ksplogo.png"
                alt="logo"
              />{" "} */}
            
          </div>
          {/* Widget */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="text-center text-white">
              Copyrights ©2022{" "}
              <a href="#" className="text-reset btn-link">
                KSP
              </a>
              . All rights reserved.
            </div>
          </div>
          {/* Widget */}
          <div className="col-md-4">
            {/* Rating */}
            <ul className="list-inline mb-0 text-center text-md-end">
              <li className="list-inline-item ms-2">
                <a href="#">
                  <i className="text-white fab fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item ms-2">
                <a href="#">
                  <i className="text-white fab fa-instagram" />
                </a>
              </li>
              {/* <li className="list-inline-item ms-2">
                <a href="#">
                  <i className="text-white fab fa-linkedin-in" />
                </a>
              </li> */}
              {/* <li className="list-inline-item ms-2">
                <a href="#">
                  <i className="text-white fab fa-twitter" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  
  </section>
  </div>
  )
}

export default Footer
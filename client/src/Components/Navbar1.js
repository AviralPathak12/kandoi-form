import React  from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom";
import { isAuthenticated, signout } from '../User/UserApi';
// import "./Navbar.css"
const Navbar1 = () => {

  const navigate = useNavigate();
 


  return (
    <div>
   <nav className="navbar navbar-custom navbar-expand-sm  navbar-light">
    <div className="container-fluid justify-content-left">
    <div className="logo">
        <img src={require("../Media/ksplogo.png")} className="img-fluid rounded mx-auto d-block mr-2 " height="70px" width="50px" alt="logo" />
      </div>
      <Link className="navbar-brand mt-2 ml-2" to="#" >
       <h1 className='text-danger fw-bold'> K.S.P </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav justify-content-center ml-4 me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="#" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/privacypolicy" >
              Privacy Policy
            </Link>
          </li>
        
        
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </form>

        {isAuthenticated() && (
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={() => signout(() => navigate("/"))}
                      >
                        Signout
                      </Link>
                    </li>
                  )}
      </div>
    </div>
  </nav>
  
  </div>
  )
}

export default Navbar1
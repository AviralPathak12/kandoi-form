import React from 'react';


const Header = () => (
  <div className='container justify-content-center mt-10 pt-5 mb-5'>
    <h1 className='text-center'>Registration Form KSP</h1>
    <div className="logo">
        <img src={require("../Media/ksplogo.png")} className="img-fluid rounded mx-auto d-block" height="200px" width="150px" alt="logo" />
      </div>
  </div>
);

export default Header;
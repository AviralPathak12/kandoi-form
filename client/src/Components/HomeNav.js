import React from 'react'
import { Link } from 'react-router-dom'

const HomeNav = () => {
  return (
    
 <div className="container mt-4">
   <div className="row justify-content-center row-cols-3 mb-2  row-cols-sm-3  g-4">
  <div className="col">
    <div className="card h-100">
      <Link to='/mataji'>
      <img src={require("../Media/ksp-gotra.png")} className="card-img-top" alt="ksp-gotra" />
      </Link>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    {/* "/profile-edit?user=" + profile._id */}
      <Link to="/newslist?type=news">
      <img src={require("../Media/ksp-news.png")} className="card-img-top" alt="ksp-news" />
      </Link>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <Link to="/panchang">
      <img src={require("../Media/ksp-panchang.png")} className="card-img-top" alt="ksp-panchang" />
      </Link>
    </div>
  </div>

</div>

  <div className="row justify-content-center row-cols-3    g-4 mb-2 ">


  <div className="col">
    <div className="card h-100">

      <Link to="/vastipatrak">
      <img src={require("../Media/ksp-parichay.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div>


  <div className="col">
    <div className="card h-100">
      <Link to="/fssai">
      <img src={require("../Media/ksp-fssai.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">

      <Link to="/newslist?type=shubh">
      <img src={require("../Media/ksp-shubh.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div>
  </div>

  <div className="row justify-content-center row-cols-3    g-4 mb-2 ">

  <div className="col">
    <div className="card h-100">

      <Link to="/newslist?type=shok">
      <img src={require("../Media/ksp-shok.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">

      <Link to="/gaushala">
      <img src={require("../Media/ksp-gaushala.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">

      <Link to="/accounts">
      <img src={require("../Media/ksp-accounts.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div>

  </div>

  <div className="row justify-content-center row-cols-3    g-4 mb-2">


  {/* <div className="col">
    <div className="card h-100">

      <Link to="/paifund">
      <img src={require("../Media/ksp-paifund.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div> */}

  <div className="col">
    <div className="card h-100">

      <Link to="/aboutus">
      <img src={require("../Media/ksp-aboutUs.png")} className="card-img-top" alt="ksp-parichay" />
      </Link>
    </div>
  </div>

</div>
</div>



  )
}

export default HomeNav
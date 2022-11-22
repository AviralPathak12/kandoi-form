import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header";

import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";

import SliderCarousel from "../Components/Carousel";

import NavbarSidedrawer from "../Components/NavbarSidedrawer";
import HomeNav from "../Components/HomeNav";
import AboutUs from "../pages/AboutUs";

import Embed from "../Components/Embed";
import Panchang from "../pages/Panchang";
import Shok from "../pages/Shok";
import Shubh from "../pages/Shubh";
import News from "../pages/News";
// import Paifund from "../pages/Paifund";
import Mataji from "../pages/Mataji";
import Fssai from "../pages/Fssai";
import Accounts from "../pages/Accounts";
import Gaushala from "../pages/Gaushala";
import VastiPatrak from "../pages/VastiPatrak";
import EmbedGuj from "../Components/EmbedGuj";
import PrivacyPolicy from "../pages/PrivacyPolicy";

// import Signup from "../container/auth/signup";
// import Profile from "../container/form/profile";
// import Auth from "../container/admin/auth/auth";
// import ProfileTable from "../container/admin/profile/profileList";
// import ProfileShow from "../container/admin/profileShow/profileShow";
// import ProfileEdit from "../container/admin/profileEdit/profileEdit";

import Login from "../User/user";
import Signup from "../container/auth/signup";
import Profile from "../container/form/profile";
import Auth from "../container/admin/auth/auth";
import ProfileTable from "../container/admin/profile/profileList";
import ProfileShow from "../container/admin/profileShow/profileShow";
import ProfileEdit from "../container/admin/profileEdit/profileEdit";
import PrivateRoute from "../Components/privateRoute/privateRoute";
import UserRoute from "../User/UserRoute";

import UserProfileShow from "../container/profile/profileShow";
import UserProfileTable from "../container/profile/profileList";
import AddNews from "../container/admin/newsAdmin";
import NewsList from "../pages/ShowNews";
import AdminNewsList from "../container/admin/newsList";

const AppRouter = () => (
  <BrowserRouter>
    {/* <NavbarSidedrawer /> */}

    <Navbar1 />
    {/* <Header /> */}
    <SliderCarousel />

    <Routes>
      <Route path="/" exact element={<HomeNav />} />
      <Route path="/mataji" exact element={<Mataji />} />
      <Route path="/fssai" exact element={<Fssai />} />
      <Route path="/accounts" exact element={<Accounts />} />
      <Route path="/gaushala" exact element={<Gaushala />} />

      <Route path="/aboutUs" exact element={<AboutUs />} />
      <Route path="/panchang" exact element={<Panchang />} />
      <Route path="/shok" exact element={<Shok />} />
      <Route path="/shubh" exact element={<Shubh />} />
      <Route path="/news" exact element={<News />} />
      <Route path="/news/create" exact element={<AddNews />} />
      <Route path="/news/list" exact element={<AdminNewsList />} />
      <Route path="/newslist" exact element={<NewsList />} />
      <Route path="/login" exact element={<Login />} />

      <Route
        path="/vastipatrak"
        element={<UserRoute element={<VastiPatrak />} />}
      />

      <Route path="/signup" element={<Signup />} />
      <Route path="/kspform" element={<Profile />} />
      {/* <Route
          path="/user-profile-show"
          element={<PrivateRoute type="client" element={<UserProfileShow />} />}
        />
        <Route
          path="/user-profile-table"
          element={
            <PrivateRoute type="client" element={<UserProfileTable />} />
          } 
        />*/}
      {/* <Route path="/admin" element={<Auth />} />
        <Route
          path="/profileTable"
          element={<PrivateRoute type="admin" element={<ProfileTable />} />}
        />
        <Route
          path="/profile-show"
          element={<PrivateRoute type="admin" element={<ProfileShow />} />}
        />
        <Route
          path="/profile-edit"
          element={<PrivateRoute type="admin" element={<ProfileEdit />} />}
        />
  */}

      <Route path="/user-profile-show" element={<UserProfileShow />} />
      <Route path="user-profile-table" element={<UserProfileTable />} />

      <Route path="user-profile-table" element={<UserProfileTable />} />
      <Route path="admin" element={<Auth />} />
      <Route
        path="profileTable"
        element={<PrivateRoute type="admin" element={<ProfileTable />} />}
      />
      <Route
        path="profile-show"
        element={<PrivateRoute type="admin" element={<ProfileShow />} />}
      />
      <Route
        path="profile-edit"
        element={<PrivateRoute type="admin" element={<ProfileEdit />} />}
      />
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default AppRouter;

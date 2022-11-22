import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./UserApi";

const UserRoute = ({ element: Element, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Element {...props} />
      ) : (
        <Navigate
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);


export default UserRoute
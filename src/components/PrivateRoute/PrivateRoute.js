import React, { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { redirect } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { ProductContext } from "../../App";

const PrivateRoute = ({ children }) => {
  const userContext = useContext(ProductContext);
  const { user, setUser } = userContext[2];

  const location = useLocation();

  return user.email ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;

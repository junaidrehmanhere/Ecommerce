import React, { useContext, useEffect, useState } from "react";
import LoggInContext from "../context/createcontext/createlogincontext";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
  const loc = useLocation();
  const context = useContext(LoggInContext);
  const { IsLoggedIn } = context;

  if (!IsLoggedIn) {
    return (
        <Navigate to="/log-in" state={{ redirectedFrom: loc }} />
        );
  }

  return children;
}

export default ProtectedRoute;

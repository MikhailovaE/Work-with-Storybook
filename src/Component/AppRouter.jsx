import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <>
      <Routes>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Error />} path="/error-404" />
        <Route path="/*" element={<Navigate replace to="/error-404" />} />
      </Routes>
    </>
  ) : (
    <>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route path="/*" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
};

export default AppRouter;

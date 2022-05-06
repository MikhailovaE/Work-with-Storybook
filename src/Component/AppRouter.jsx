import React, { useContext } from "react";
import { Routes, Route, Navigate, Redirect } from "react-router";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  
  return isAuth ? (
    <>
      <Routes>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route path="/*" element={<Navigate replace to="/dashboard" />} />
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

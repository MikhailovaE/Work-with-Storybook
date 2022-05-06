import React, { useContext } from "react";
import Input from "../Component/UI/Input/Input";
import Button from "../Component/UI/Button/Button";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    router(`/`);
  };

  return (
    <>
      <div className="login">
        <div className="banner">
          <div className="login-main-text">
            <h2>Application Login Page</h2>
            <p>Login or register from here to access.</p>
          </div>
        </div>
        <div className="main">
          <div className="login-form">
            <form onSubmit={login}>
              <div className="form-group">
                <Input
                  label="User Name"
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <Input
                  type="password"
                  placeholder="Введите пароль"
                  label="Password"
                />
              </div>
              <Button type="submit">
                Login
              </Button>
              <Button type="submit">
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

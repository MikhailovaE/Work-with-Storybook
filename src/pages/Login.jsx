import React, { useContext } from "react";
import Input from "../Component/UI/Input/Input";
import Button from "../Component/UI/Button/Button";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.scss";
import loginImg from "../images/SVG/TalkWithFamilyandFriends.svg";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    router(`/dashboard`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={loginImg} alt={loginImg} />
        </div>
        <div className={styles["login-content"]}>
          <form onSubmit={login}>
            <h2 className={styles.title}>Welcome</h2>
            <Input
              type="text"
              className="form-control"
              placeholder="User Name"
            />
            <Input type="password" placeholder="Введите пароль" />
            {!isAuth && (
              <div>
                <Button className={styles.btn} type="submit">
                  Login
                </Button>
                <Button className={styles.btn} type="submit">
                  Register
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

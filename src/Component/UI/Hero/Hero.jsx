import React, { useContext } from "react";
import Button from "../Button/Button";
import styles from "./Hero.module.scss";
import { AuthContext } from "../../../context";
import { useNavigate } from "react-router-dom";

function Hero(props) {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    router(`/`);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1>
          The simple way to <span className={styles.highlighted}>Connect</span>{" "}
          and look back on moments forever.
        </h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <div className={styles.action}>
          <Button onClick={logout}>Get Started</Button>
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
}

export default Hero;

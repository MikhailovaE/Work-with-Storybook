import React from "react";
import Button from "../Button/Button";
import styles from './Hero.module.scss'

function Hero(props) {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h1>
          The simple way to <span className={styles.highlighted}>Connect</span> and look back on moments forever.
        </h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <div className={styles.action}>
          <Button>Get Started</Button>
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
}

export default Hero;

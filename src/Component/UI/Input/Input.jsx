import React from "react";
import styles from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label className={styles.label}>
        {props.label}
        <input ref={ref} {...props} className={styles.Input} />
      </label>
    </>
  );
});

export default Input;

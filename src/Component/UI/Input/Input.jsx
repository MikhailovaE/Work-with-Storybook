import React from "react";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FiAlertCircle } from "react-icons/fi";

const Input = ({
  label,
  isDisabled,
  isInvalid,
  helperText,
  errorText,
  ref,
  ...props
}) => {
  return (
    <>
      <div
        className={classNames(
          styles.inputWrapper,
          isDisabled && styles["is-disabled"],
          isInvalid && styles["is-invalid"]
        )}
      >
        <label className={styles.label}>{label}</label>
        <input
          disabled={isDisabled}
          ref={ref}
          {...props}
          className={styles.input}
        />
        {isInvalid ? (
          <>
            <FiAlertCircle />
            <p className={classNames(styles.helperText, styles.errorText)}>
              {errorText}
            </p>
          </>
        ) : (
          <p className={styles.helperText}>{helperText}</p>
        )}
      </div>
    </>
  );
};

Input.propTypes = {
  ref: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  helperText: PropTypes.string,
  errorText: PropTypes.string,
  isInvalid: PropTypes.bool,
};

Input.defaultProps = {
  isDisabled: false,
  isInvalid: false,
  errorText: "A valid value is required",
};

export default Input;

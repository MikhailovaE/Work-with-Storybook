import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, isDisabled, variant, size, onClick, ...props }) => {
  return (
    <button
      className={classNames(
        styles.root,
        styles[variant],
        isDisabled && styles.isDisabled,
        styles["is-size-" + size]
      )}
      aria-disabled={isDisabled ? true : null}
      onClick={onClick}
      aria-label={children}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf[("primary", "secondary")],
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf[("sm", "md", "xl")],
};

Button.defaultProps = {
  variant: "primary",
  isDisabled: false,
  size: "md",
};

export default Button;

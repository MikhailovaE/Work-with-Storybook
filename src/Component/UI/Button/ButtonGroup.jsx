import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const ButtonGroup = ({ children, props }) => {
    return (
      <div
      className={styles.group}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  ButtonGroup.propTypes = {
    children: PropTypes.node,
    props: PropTypes.object,
  };

  export default ButtonGroup;
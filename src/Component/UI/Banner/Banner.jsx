import React from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

export function Banner({ ...props }) {
  const { position, children, ...rest } = props;

  const BannerColors = {
    backgroundColor: rest.backgroundColor,
    padding: "40px",
  };

  return (
    <div style={BannerColors}>
      <div
        className={classNames(
          styles.root,
          styles["position-horizontal-" + position]
        )}
      >
        <h1 className={styles.title}>{rest.title}</h1>
        <div className={styles.description}>{rest.description}
        </div>
        <div className={styles.section}>{children}</div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  position: PropTypes.oneOf(["right", "left", "center"]),
  children: PropTypes.node
};

Banner.defaultProps = {
  position: "right",
  children: null
};

export default Banner;

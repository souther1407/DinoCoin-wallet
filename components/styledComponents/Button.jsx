import React from "react";
import styles from "../../styles/styledComponent/button.module.css";

const Button = ({
  type = "bordered",
  color = "primary",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[color]} ${styles[type]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

import styles from "../../styles/styledComponent/text.module.css";
import React from "react";
const Text = ({ type, size, color = "primary", bold, children }) => {
  if (type === "title") {
    return (
      <h1
        className={`${styles.text} ${styles[size]} ${styles[color]} ${
          styles[bold && "bold"]
        }`}
      >
        {children}
      </h1>
    );
  } else if (type === "span") {
    return (
      <span
        className={`${styles.text} ${styles[size]} ${styles[color]} ${
          styles[bold && "bold"]
        }`}
      >
        {children}
      </span>
    );
  }
  return (
    <p
      className={`${styles.text} ${styles[size]} ${styles[color]} ${
        styles[bold && "bold"]
      } `}
    >
      {children}
    </p>
  );
};

export default Text;

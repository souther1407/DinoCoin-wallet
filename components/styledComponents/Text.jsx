import styles from "../../styles/styledComponent/text.module.css";
import React from "react";
const Text = ({ type, size, children }) => {
  if (type === "title") {
    return <h1 className={`${styles[size]}`}>{children}</h1>;
  }
  return <p className={`${styles[size]}`}>{children}</p>;
};

export default Text;

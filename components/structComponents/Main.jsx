import React from "react";
import Text from "../styledComponents/Text";
import Button from "../styledComponents/Button";
import FundsPanel from "../structComponents/FundsPanel";
import SendPanel from "../structComponents/SendPanel";
import styles from "../../styles/structComponents/main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <FundsPanel />
      <SendPanel />
    </div>
  );
};

export default Main;

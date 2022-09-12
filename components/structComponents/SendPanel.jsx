import React from "react";
import styles from "../../styles/structComponents/sendPanel.module.css";
import Text from "../styledComponents/Text";
import Panel from "../styledComponents/Panel";
import SendTokens from "./SendTokens";

const SendPanel = () => {
  return (
    <Panel>
      <div className={styles.title}>
        <Text>Transfiere tus tokens</Text>
      </div>

      <SendTokens />
    </Panel>
  );
};

export default SendPanel;

import React from "react";
import styles from "../../styles/styledComponent/loading.module.css";
import { Loading as L } from "web3uikit";
import { parseSizeToNumber } from "../../utils/parse";

const Loading = ({ size }) => {
  return (
    <div>
      <L size={parseSizeToNumber(size)} />
    </div>
  );
};

export default Loading;

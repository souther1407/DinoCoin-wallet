import React from "react";
import { ConnectButton } from "web3uikit";
import styles from "../../styles/structComponents/header.module.css";
const Header = () => {
  return (
    <nav className={styles.container}>
      <ConnectButton moralisAuth={false} />
    </nav>
  );
};

export default Header;

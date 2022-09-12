import styles from "../styles/Home.module.css";
import Meta from "../components/configComponents/Meta";
import Header from "../components/structComponents/Header";
import Main from "../components/structComponents/Main";
import { useMoralis } from "react-moralis";
export default function Home() {
  const { account } = useMoralis();
  return (
    <div className={styles.container}>
      <Meta
        title={"Dinocoin billetera"}
        description={"guarda tus Dinocoins tranca por aca"}
        keywords={"bitcoin,critomonedas,web3"}
      />
      <Header />
      {account ? (
        <Main />
      ) : (
        <p>Tienes que conectarte a tu billetera de metamask</p>
      )}
    </div>
  );
}

import styles from "../styles/Home.module.css";
import Meta from "../components/configComponents/Meta";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta
        title={"Dinocoin billetera"}
        description={"guarda tus Dinocoins tranca por aca"}
        keywords={"bitcoin,critomonedas,web3"}
      />
    </div>
  );
}

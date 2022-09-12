import styles from "../../styles/structComponents/panel.module.css";

const Panel = ({ ajusted, children }) => {
  return (
    <div className={`${styles.container} ${styles[ajusted && "ajusted"]}`}>
      {children}
    </div>
  );
};

export default Panel;

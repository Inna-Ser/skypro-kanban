import { MainBlock } from "../mainContainer/mainBlock/MainBlock";
import styles from "./MainContainer.module.css";

export const MainContainer = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainBlock />
      </div>
    </main>
  );
};

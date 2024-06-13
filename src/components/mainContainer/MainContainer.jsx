import { MainBlock } from "../mainContainer/mainBlock/MainBlock";
import styles from "./MainContainer.module.css";

export const MainContainer = ({cards}) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainBlock cards={cards}/>
      </div>
    </main>
  );
};

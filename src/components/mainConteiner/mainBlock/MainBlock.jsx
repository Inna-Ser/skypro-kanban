import { statusList } from "../../../utils/cardItem";
import { MainColumn } from "../mainColumn/MainColumn";
import styles from "./MainBlock.module.css";

export const MainBlock = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.mainContent}>
        {statusList.map((status) => (
          <MainColumn key={status} title={status} />
        ))}
      </div>
    </div>
  );
};

import { CardsItem } from "./cardsItem/CardsItem";
import styles from "./MainColumn.module.css";
import classNames from "classnames";

export const MainColumn = ({ title }) => {
  return (
    <div className={classNames(styles.mainColumn, styles.column)}>
      <div className={styles.columnTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.cards}>
        <CardsItem />
      </div>
    </div>
  );
};

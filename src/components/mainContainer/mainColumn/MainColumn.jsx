import { CardsItem } from "../../cardsItem/CardsItem";
import styles from "./MainColumn.module.css";
import classNames from "classnames";

export const MainColumn = ({ title, cardList }) => {
  return (
    <div className={classNames(styles.mainColumn, styles.column)}>
      <div className={styles.columnTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.cards}>
        {cardList.map((item) => (
          <CardsItem key={item._id} {...item} topic={item.topic} />
        ))}
      </div>
    </div>
  );
};

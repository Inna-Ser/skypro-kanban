// import { useState } from "react";
import { useEffect, useState } from "react";
import { statusList } from "../../../utils/cardItem";
import { MainColumn } from "../../mainContainer/mainColumn/MainColumn";
import styles from "./MainBlock.module.css";

export const MainBlock = ({ cards }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);
  return (
    <div className={styles.mainBlock}>
      <div className={styles.mainContent}>
        {isLoading ? (
          <div>Данные загружаются</div>
        ) : (
          statusList.map((status) => (
            <MainColumn
              key={status}
              title={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))
        )}
      </div>
    </div>
  );
};

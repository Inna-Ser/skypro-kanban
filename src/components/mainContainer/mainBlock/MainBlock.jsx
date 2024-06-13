import { useContext, useEffect, useState } from "react";
import { statusList } from "../../../utils/cardItem";
import { MainColumn } from "../../mainContainer/mainColumn/MainColumn";
import styles from "./MainBlock.module.css";
import { TaskContext } from "../../../context/TaskProvider";

export const MainBlock = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { cards } = useContext(TaskContext);

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
              cardList={
                Array.isArray(cards)
                  ? cards.filter((card) => card.status === status)
                  : []
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

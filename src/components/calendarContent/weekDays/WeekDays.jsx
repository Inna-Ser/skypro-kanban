import { weekDays } from "../../../utils/weekDays";
import styles from "./WeekDays.module.css";

const WeekDay = ({ name }) => {
  return <div className={styles.calendarDayName}>{name}</div>;
};
export const WeekDays = () => {
  return (
    <>
      <div className={styles.calendarDaysNames}>
        {weekDays.map((name) => (
          <WeekDay key={name} title={name} />
        ))}
      </div>
    </>
  );
};

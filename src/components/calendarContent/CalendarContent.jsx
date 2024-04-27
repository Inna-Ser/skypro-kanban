import { WeekDays } from "./weekDays/WeekDays";
import styles from "./CalendarContent.module.css";

export const CalendarContent = () => {
  return (
    <div className={styles.calendarContent}>
      <WeekDays />
    </div>
  );
};

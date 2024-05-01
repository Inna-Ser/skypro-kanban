import { WeekDays } from "./weekDays/WeekDays";
import styles from "./CalendarContent.module.css";
import { CalendarCells } from "./calendarCells/CalendarCells";

export const CalendarContent = () => {
  return (
    <div className={styles.calendarContent}>
      <WeekDays />
      <CalendarCells />
    </div>
  );
};

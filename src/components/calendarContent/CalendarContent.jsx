import styles from "./CalendarContent.module.css";
import { DayPicker } from "react-day-picker";

export const CalendarContent = () => {
  return (
    <>
      <div className={styles.calendarContent}>
        <p className={styles.calendarTitle}>Даты</p>
        <DayPicker />
      </div>
    </>
  );
};

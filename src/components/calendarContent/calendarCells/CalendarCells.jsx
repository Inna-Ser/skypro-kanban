import classNames from "classnames";
import styles from "./CalendarCells.module.css";

const CalendarDay = ({ number }) => {
  return (
    <div className={classNames(styles.calendarCell, styles.otherMonth)}>
      {number}
    </div>
  );
};

export const CalendarCells = ({ daysInMonth }) => {
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  return (
    <div className={styles.calendarCells}>
      {daysArray.map((day) => (
        <CalendarDay key={day} number={day} />
      ))}
    </div>
  );
};

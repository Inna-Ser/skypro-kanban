import styles from "./CalendarCells.module.css";

const CalendarDay = ({ number }) => {
  return <div className={styles.calendarCell}>{number}</div>;
};

export const CalendarCells = () => {
  const daysArray = Array.from({ length: 31 }, (_, index) => index + 1);
  return (
    <div className={styles.calendarCells}>
      {daysArray.map((day) => (
        <CalendarDay key={day} number={day} />
      ))}
    </div>
  );
};

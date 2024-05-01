import classNames from "classnames";
import { CalendarContent } from "../calendarContent/CalendarContent";
import styles from "./Calendar.module.css";

export const Calendar = () => {
  return (
    <div className={classNames(styles.popNewCardCalendar, styles.calendar)}>
      <p className={classNames(styles.calendarTtl, styles.subttl)}>Даты</p>
      <div className={styles.calendarBlock}>
        <div className={styles.calendarNav}>
          <div className={styles.calendarMonth}>Сентябрь 2023</div>
          <div className={styles.navActions}>
            <div className={styles.navAction} data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div className={styles.navAction} data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <CalendarContent />

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <div className={styles.calendarPeriod}>
          <p className={classNames(styles.calendarP, styles.dateEnd)}>
            Срок исполнения: <span className="date-control">09.09.23</span>
            {/* не нашла класс css */}
          </p>
        </div>
      </div>
    </div>
  );
};

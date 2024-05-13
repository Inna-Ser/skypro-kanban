import classNames from "classnames";
import styles from "./User.module.css";
import shared from "../../../styles/shared.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSet = () => {
  return (
    <>
      <div
        className={classNames(styles.headerPopUserSet, styles.popUserSet)} //headerPopUserSet не нашла класс//
        id="user-set-target"
      >
        <p className={styles.popUserSetName}>Ivan Ivanov</p>
        <p className={styles.popUserSetMail}>ivan.ivanov@gmail.com</p>
        {/* <div className={styles.popUserSetTheme}>
          <p>Темная тема</p>
          <input
            type="checkbox"
            className={styles.checkbox} //нашла только type//
            name="checkbox"
          />
        </div> */}
        <button
          type="button"
          className={classNames(styles.setUserButton, shared.hover03)}
        >
          <Link to="/exit">Выйти</Link>
        </button>
      </div>
    </>
  );
};

export const User = () => {
  const [isUserSet, setIsUserSet] = useState(null);

  useEffect(() => {
    setIsUserSet(false);
    return () => {
      setIsUserSet(true);
    };
  }, []);

  const toggleUserName = () => setIsUserSet(!isUserSet);

  return (
    <>
      {isUserSet && <UserSet />}{" "}
      {/* Отображаем UserSet, если isUserSet === true */}
      <button
        // href="#user-set-target"
        className={classNames(styles.headerUser, shared.hover02)}
        onClick={toggleUserName}
      >
        Ivan Ivanov
      </button>
    </>
  );
};

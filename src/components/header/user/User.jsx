import classNames from "classnames";
import styles from "./User.module.css";
import shared from "../../../styles/shared.module.css";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/AuthUserProvider";

const UserSet = () => {
  const { user } = useContext(UserContext);
  const [userDate, setUser] = useState({
    name: user.user.name,
    login: user.user.login,
  });
  return (
    <>
      <div
        className={classNames(styles.headerPopUserSet, styles.popUserSet)} //headerPopUserSet не нашла класс//
        id="user-set-target"
      >
        <p className={styles.popUserSetName}>
          {user ? userDate.name : "Гость"}
        </p>
        <p className={styles.popUserSetMail}>ivan.ivanov@gmail.com</p>

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
  const { user } = useContext(UserContext);

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
      <button
        className={classNames(styles.headerUser, shared.hover02)}
        onClick={toggleUserName}
      >
        {user.name}
      </button>
    </>
  );
};

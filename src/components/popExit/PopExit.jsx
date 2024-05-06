import classNames from "classnames";
import styles from "./PopExit.module.css";
import { Login } from "../auth/login/Login";
import { MainPage } from "../../pages/MainPage";
import { useState } from "react";

export const PopExit = () => {
  const [isExit, setIsExit] = useState(false);
  const [isStay, setIsStay] = useState(false);

  const toggleExit = () => {
    setIsStay(!isStay);
    setIsExit(isExit);
  };

  const toggleStay = () => {
    setIsStay(isStay);
    setIsExit(!isExit);
  };
  return (
    <>
      <div className={styles.popExit} id="popExit">
        <div className={styles.popExitContainer}>
          <div className={styles.popExitBlock}>
            <div className={styles.popExitTtl}>
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className={styles.popExitForm} id="formExit" action="#">
              <div className={styles.popExitFormGroup}>
                {isExit && <Login />}{" "}
                <button
                  className={classNames(styles.popExitExitYes, styles.hover01)}
                  id="exitYes"
                  onClick={toggleExit}
                >
                  Да, выйти
                </button>
                {isStay && <MainPage />}{" "}
                <button
                  className={classNames(styles.popExitExitNo, styles.hover03)}
                  id="exitNo"
                  onClick={toggleStay}
                >
                  Нет, остаться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

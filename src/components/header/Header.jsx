import styles from "./Header.module.css";
import classNames from "classnames";
import { HeaderNav } from "./headerNav/HeaderNav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div
            className={classNames(styles.headerLogo, styles.show, styles.light)}
          >
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className={classNames(styles.headerLogo, styles.dark)}>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

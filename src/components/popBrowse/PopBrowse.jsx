import { statusList } from "../../utils/cardItem";
import { BrowseForm } from "./browseForm/BrowseForm";
import { BrowseTopBlock } from "./browseTopBlock/BrowseTopBlock";
import { StatusTheme } from "./stutusTheme/StatusTheme";
import styles from "./PopBrowse.module.css";
import classNames from "classnames";
import { Calendar } from "../calendar/Calendar";

const ThemeDownCategories = () => {
  return (
    <div className={classNames(styles.themeDownCategories, styles.themeDown)}>
      {/* не нашла css class */}
      <p className={classNames(styles.categoriesP, styles.subttl)}>Категория</p>
      <div
        className={classNames(
          styles.categoriesTheme,
          styles.orange,
          styles.activeCategory
        )}
      >
        <p className={styles.orange}>Web Design</p>
      </div>
    </div>
  );
};

const Browse = () => {
  return (
    <div className={styles.popBrowseBtnBrowse}>
      <div className={styles.btnGroup}>
        <button
          className={classNames(
            styles.btnBrowseEdit,
            styles.btnBor,
            styles.hover03
          )}
        >
          {/* не нашла класс */}
          <a href="#">Редактировать задачу</a>
        </button>
        <button
          className={classNames(
            styles.btnBrowseDelete,
            styles.btnBor,
            styles.hover03
          )}
        >
          <a href="#">Удалить задачу</a>
        </button>
      </div>
      <button
        className={classNames(
          styles.btnBrowseClose,
          styles.btnBg,
          styles.hover01
        )}
      >
        <a href="#">Закрыть</a>
      </button>
    </div>
  );
};

const BrowseEdit = () => {
  return (
    <div className={classNames(styles.popBrowseBtnEdit, styles.hide)}>
      <div className={styles.btnGroup}>
        <button
          className={classNames(
            styles.btnEditEdit,
            styles.btnBg,
            styles.hover01
          )}
        >
          <a href="#">Сохранить</a>
        </button>
        <button
          className={classNames(
            styles.btnEditEdit,
            styles.btnBor,
            styles.hover03
          )}
        >
          <a href="#">Отменить</a>
        </button>
        <button
          className={classNames(
            styles.btnEditDelete,
            styles.btnBor,
            styles.hover03
          )}
          id="btnDelete"
        >
          <a href="#">Удалить задачу</a>
        </button>
      </div>
      <button
        className={classNames(
          styles.btnEditClose,
          styles.btnBg,
          styles.hover01
        )}
      >
        <a href="#">Закрыть</a>
      </button>
    </div>
  );
};

export const PopBrowse = () => {
  return (
    <div className="pop-browse" id="popBrowse">
      <div className={styles.popBrowseContainer}>
        <div className={styles.popBrowseBlock}>
          <div className={styles.popBrowseContent}>
            <BrowseTopBlock />
            <div className={classNames(styles.popBrowseStatus, styles.status)}>
              <p className={classNames(styles.statusP, styles.subttl)}>
                Статус
              </p>
              <div className={styles.statusThemes}>
                {statusList.map((status) => (
                  <StatusTheme key={status} title={status} />
                ))}
                {/* <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div> */}
              </div>
            </div>
            <div className={styles.popBrowseWrap}>
              <BrowseForm />
              <Calendar />
            </div>
            <ThemeDownCategories />
            <Browse />
            <BrowseEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

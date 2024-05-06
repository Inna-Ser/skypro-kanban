import { useState } from "react";
import { Calendar } from "../calendar/Calendar";

export const PopNewCard = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
  });
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={taskData.title}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={taskData.description}
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <label className="_orange">
                    Web Design
                    <input type="radio" value="Web Design" />
                  </label>
                </div>
                <div className="categories__theme _green">
                  <label className="_green">
                    Research
                    <input type="radio" value="Research" />
                  </label>
                </div>
                <div className="categories__theme _purple">
                  <label className="_purple">
                    Copywriting
                    <input type="radio" value="Copywriting" />
                  </label>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

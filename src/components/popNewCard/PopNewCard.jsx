import { useState } from "react";
import { Calendar } from "../calendar/Calendar";

export const PopNewCard = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };
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
                    onChange={onChange}
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={taskData.description}
                    onChange={onChange}
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
                    <input
                      name="topic"
                      type="radio"
                      value="Web Design"
                      checked={taskData.topic === "Web Design"}
                      onChange={onChange}
                    />
                  </label>
                </div>
                <div className="categories__theme _green">
                  <label className="_green">
                    Research
                    <input
                      name="topic"
                      type="radio"
                      value="Research"
                      checked={taskData.topic === "Research"}
                      onChange={onChange}
                    />
                  </label>
                </div>
                <div className="categories__theme _purple">
                  <label className="_purple">
                    Copywriting
                    <input
                      name="topic"
                      type="radio"
                      value="Copywriting"
                      checked={taskData.topic === "Copywriting"}
                      onChange={onChange}
                    />
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

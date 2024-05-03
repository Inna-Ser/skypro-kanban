import React, { useContext, useEffect, useState } from "react";
import { getTask } from "../api/api";
import { UserContext } from "./AuthUserProvider";

export const TaskContext = React.createContext(null);

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getTask({token: user?.user.token})
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          console.log("Не удалось загрузить треки");
          return;
        }
        console.log(error.message);
      });
  }, []);

  const onCardAdd = () => {
    const newCard = {
      id: cards.length + 1, // Генерируем уникальный id для новой карточки
      theme: "Новая тема", // Устанавливаем тему новой задачи по умолчанию
      title: "Новая задача", // Устанавливаем заголовок новой задачи по умолчанию
      date: "30.10.23", // Устанавливаем дату новой задачи по умолчанию
      status: "Без статуса", // Устанавливаем статус "Без статуса" для новой задачи
    };
    setCards((prevCardList) => [newCard, ...prevCardList]);
  };
  return (
    <TaskContext.Provider value={{ onCardAdd, cards, setCards }}>
      {children}
    </TaskContext.Provider>
  );
};

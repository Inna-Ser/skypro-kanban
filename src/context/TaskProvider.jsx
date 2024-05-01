import React, { useState } from "react";
import { cardList } from "../utils/data";

export const TaskContext = React.createContext(null);

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState(cardList);
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

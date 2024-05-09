import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./AuthUserProvider";
import { addTask, deleteTask, editTask, getTask } from "../../../api/api";

export const TaskContext = React.createContext(null);

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const { user } = useContext(UserContext);
  useEffect(() => {
    getTask({ token: user?.user.token })
      .then((data) => {
        setCards(data.tasks);
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          console.log("Не удалось загрузить треки");
          return;
        }
        console.log(error.message);
      });
  }, []);

  const onCardAdd = async ({ title, topic, status, description, date }) => {
    try {
      const newTask = await addTask({
        title,
        topic,
        status,
        description,
        date,
        token: user?.user.token,
      });
      setCards((prevCards) => [...prevCards, newTask]);
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error.message);
    }
  };

  const onDeleteTask = async (id) => {
    try {
      const resalte = await deleteTask({ id, token: user?.user.token });
      setCards(resalte.tasks);
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error.message);
    }
  };

  const onEditTask = async ({
    id,
    title,
    topic,
    status,
    description,
    date,
    token,
  }) => {
    try {
      const newCard = await editTask({
        id,
        title,
        topic,
        status,
        description,
        date,
        token,
      });
      setCard(newCard);
    } catch (error) {
      console.error("Ошибка при редактировании задачи:", error.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{ onCardAdd, cards, setCards, onDeleteTask, onEditTask, card }}
    >
      {children}
    </TaskContext.Provider>
  );
};

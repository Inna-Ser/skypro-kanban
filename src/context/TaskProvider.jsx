import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./AuthUserProvider";
import { addTask, deleteTask, editTask, getTask } from "../api/api";
import { useNavigate } from "react-router-dom";

export const TaskContext = React.createContext(null);

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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

  const onCardAdd = async ({ title, topic, description, status, date }) => {
    try {
      const resalte = await addTask({
        title,
        topic,
        description,
        status,
        date,
        token: user?.user.token,
      });
      setCards(resalte.tasks);
      navigate("/");
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
    description,
    status,
    date,
    token,
  }) => {
    try {
      const resalte = await editTask({
        id,
        title,
        topic,
        description,
        status,
        date,
        token,
      });
      console.log(resalte);
      setCards(resalte.tasks);
      navigate("/");
    } catch (error) {
      console.error("Ошибка при редактировании задачи:", error.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{ onCardAdd, cards, setCards, onDeleteTask, onEditTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

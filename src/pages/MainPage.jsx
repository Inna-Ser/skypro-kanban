import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { MainContainer } from "../components/mainContainer/MainContainer";
import { TaskProvider } from "../components/protectedRoute/context/TaskProvider";

export const MainPage = () => {
  return (
    <TaskProvider>
      <Header />
      <MainContainer />
      <Outlet />
    </TaskProvider>
  );
};

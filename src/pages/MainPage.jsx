import { Header } from "../components/header/Header";
import { MainContainer } from "../components/mainContainer/MainContainer";
import { TaskProvider } from "../context/TaskProvider";

export const MainPage = () => {
  return (
    <TaskProvider>
      <Header />
      <MainContainer />
    </TaskProvider>
  );
};

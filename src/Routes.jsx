import { Routes, Route } from "react-router-dom";
import { NotFound } from ".";
import { Register } from "./components/auth/register/Register";
import { Login } from "./components/auth/login/Login";
import { ProtectRoute } from "./components/protectedRoute/ProtectedRoute";
import { MainPage } from "./pages/MainPage";
import { PopExit } from "./components/popExit/PopExit";
import { PopNewCard } from "./components/popNewCard/PopNewCard";
import { BrowseContaner } from "./components/popBrowse/browseContaner/BrowseContaner";
import { BrowseEdit } from "./components/popBrowse/browseEdit/BrowseEdit";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registr" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/exit" element={<PopExit />} />
          <Route path="/add-task" element={<PopNewCard />} />
          <Route path="/browse/:id" element={<BrowseContaner />} />
          <Route path="/edit/:id" element={<BrowseEdit />} />
        </Route>
      </Route>
    </Routes>
  );
};

import { Routes, Route } from "react-router-dom";
import { NotFound } from ".";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { ProtectRoute } from "./components/protectedRoute/ProtectedRoute";
import { MainPage } from "./pages/MainPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registr" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route />
          <Route />
        </Route>
      </Route>
    </Routes>
  );
};

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/AuthUserProvider";

export const ProtectRoute = ({ redirectPatch = "/login" }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to={redirectPatch} replace={true} />;
  }
  return <Outlet />;
};

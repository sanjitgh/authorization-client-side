import DashboardLoadingSpinner from "../components/DashboardLoadingSpinner";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivetRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <DashboardLoadingSpinner />;

  if (!user) return <Navigate to={"/signin"} replace />;

  return children;
}

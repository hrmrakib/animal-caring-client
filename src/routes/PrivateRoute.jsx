import { Navigate, useLocation } from "react-router-dom";
import Loading from "./../components/loading/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;

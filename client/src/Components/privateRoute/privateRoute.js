import { Navigate } from "react-router-dom";
import { getAdminToken, getClientToken } from "../../utils/getTokens";

const PrivateRoute = ({ element, type }) => {
  if (type === "admin") {
    const auth = Boolean(getAdminToken());
    return auth ? element : <Navigate to="/admin" replace={true} />;
  }

  if (type === "client") {
    const auth = Boolean(getClientToken());
    return auth ? element : <Navigate to="/signup" replace={true} />;
  }
};

export default PrivateRoute;

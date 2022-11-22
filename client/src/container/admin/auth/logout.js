import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAdminLogout } from "../../../store/reducer/admin";

export default function AdminLogout(props) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogOut = () => {
    dispatch(setAdminLogout());
    history("/admin");
  };

  return (
    <>
      <p
        onClick={handleLogOut}
        style={{ float: "right", color: props.page === "toShowWhite" ? "white" : "black", cursor: "pointer" }}
      >
        Logout
      </p>
    </>
  );
}

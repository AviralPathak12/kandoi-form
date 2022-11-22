import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setClientLogout } from "../../store/reducer/client";

export default function ProfileHeader(props) {
  const dispatch = useDispatch();
  const history = useNavigate();

  function handleLogOut() {
    dispatch(setClientLogout());
    history("/signup");
  }

  return (
    <>
      <p
        onClick={handleLogOut}
        style={{ float: "right", color: props.page === "list" ? "black" : "white", cursor: "pointer" }}
      >
        LogOut
      </p>
    </>
  );
}

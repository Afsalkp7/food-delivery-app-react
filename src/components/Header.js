import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";

const Header = () => {
  const [logStatus, setLogStatus] = useState("Login");
  const onlineStatus = useCheckOnline();
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>
            online : {onlineStatus ? "✅" :"🟥"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              return logStatus === "Login"
                ? setLogStatus("Logout")
                : setLogStatus("Login");
            }}
          >
            {logStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

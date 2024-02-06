import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logStatus, setLogStatus] = useState("Login");
  const onlineStatus = useCheckOnline();
  const {loggedUser} = useContext(UserContext)
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems);

  return (
    <div className="flex justify-between">
      <div className="logoContainer">
        <img className="w-52" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul className="flex m-5 p-5">
          <li className="px-5">
            online : {onlineStatus ? "✅" :"🟥"}
          </li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-5 font-bold"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <li className="px-5 font-bold">{loggedUser}</li>
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

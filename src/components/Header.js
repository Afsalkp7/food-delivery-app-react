import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [logStatus,setLogStatus] = useState("Login")
    return (
      <div className="header">
        <div className="logoContainer">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
                return logStatus==="Login"?setLogStatus("Logout"):setLogStatus("Login")
            }}>
              {logStatus}
             </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
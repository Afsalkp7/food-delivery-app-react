import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
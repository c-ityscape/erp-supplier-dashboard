import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThLarge, faExpand, faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faThLarge} className="icon" />
        <FontAwesomeIcon icon={faExpand} className="icon" />
        <div className="notification">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://i.pinimg.com/564x/8c/c0/18/8cc0184c6b52197ffbd427207cc88f41.jpg" alt="" />
          <span>Jane</span>
        </div>
        <FontAwesomeIcon icon={faCog} className="icon" />
      </div>
    </div>
  )
};

export default Navbar;

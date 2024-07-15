import { Link } from "react-router-dom";
import "./menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faUsers, faBox, faShoppingCart, faTags, faWarehouse, faCog } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const menu = [
  { id: 1, title: "Dashboard", icon: faHome, url: "/" },
  { id: 2, title: "Leads", icon: faUser, url: "/leads" },
  { id: 3, title: "Customers", icon: faUsers, url: "/customers" },
  { id: 4, title: "Supplier", icon: faBox, url: "/supplier" },
  { id: 5, title: "Vendor", icon: faShoppingCart, url: "/vendor" },
  { id: 6, title: "Category", icon: faTags, url: "/category" },
  { id: 7, title: "Inventory", icon: faWarehouse, url: "/inventory" },
  { id: 8, title: "Settings", icon: faCog, url: "/settings" }
];

const Menu = () => {
  return (
    <div className="menu">
      
      {
        menu.map(item => (
          <Link to={item.url} className="listItem" key={item.id}>
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.title}</span>
          </Link>
        ))
      }
    </div>
  );
};

export default Menu;

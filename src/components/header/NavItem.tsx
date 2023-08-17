import { NavLink } from "react-router-dom";
import "./Header.css";

const NavItem = ({ title, linkTo }: { title: string; linkTo: string }) => {
  //scroll
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <li>
      <NavLink
        to={linkTo}
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        onClick={handleTop}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;

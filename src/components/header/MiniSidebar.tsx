import { useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./MiniSidebar.css";
import { MiniMenuContext } from "../../context/MiniMenuContext";

const MiniSidebar = () => {
  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const { miniMenu, handleMenuToggle } = useContext(MiniMenuContext);

  //close on click outside (type made by ChatGPT)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target as Node)
      ) {
        handleMenuToggle();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, [handleMenuToggle]);

  return (
    <div className="header__mini" ref={sideMenuRef}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            onClick={handleMenuToggle}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            onClick={handleMenuToggle}
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructors"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            onClick={handleMenuToggle}
          >
            Instructors
          </NavLink>
        </li>
      </ul>
      {miniMenu && <div onClick={handleMenuToggle}></div>}
    </div>
  );
};

export default MiniSidebar;

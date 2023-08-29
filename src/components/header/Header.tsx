import { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import "./Header.css";
import MiniSidebar from "./MiniSidebar";
import nftIcon from "../../assets/cyclone.png";
import profilePic from "../../assets/profilePic.jpg";
import { MiniMenuContext } from "../../context/MiniMenuContext";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const { miniMenu, handleMenuToggle } = useContext(MiniMenuContext);

  //new class in header
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add("sticky__header");
    } else {
      headerRef.current?.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <img src={nftIcon} className="logo" />
            <h2>Vortex</h2>
          </div>
          {/* mini menu */}
          <div className="miniMenu" onClick={handleMenuToggle}>
            {miniMenu ? <FaWindowClose /> : <TiThMenuOutline />}
          </div>
          <ul className="header__right">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Instructors
              </NavLink>
            </li>
          </ul>
          <div className="account__box">
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <img src={profilePic} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      {/* mini menu */}
      {miniMenu ? <MiniSidebar /> : ""}
    </header>
  );
};

export default Header;

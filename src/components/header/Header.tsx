import "./Header.css";
import nftIcon from "../../assets/cyclone.png";
import NavItem from "./NavItem";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef, useState, useEffect } from "react";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleNavClick = () => {
    setNavClicked(!navClicked);
  };

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add("header__shrink");
    } else {
      headerRef.current?.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <nav className="nav" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="side__left">
            <img src={nftIcon} className="logo" />
            <h2>Vortex</h2>
          </div>

          <ul
            className={`side__right ${
              navClicked ? "side__right active" : "side__right"
            }`}
          >
            <NavItem title="Home" linkTo="#home" />
            <div className="dropdown-wrapper">
              <div className="dropdown-wrapper-courses">
                <NavItem title="Courses" linkTo="#categories" />
                <RiArrowDropDownLine
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#category">Business</a>
                  <a href="#category">Design</a>
                  <a href="#category">Web Dev</a>
                </div>
              )}
            </div>
            <NavItem title="Q&A" linkTo="#qa" />
            <NavItem title="Subscribe" linkTo="#subscribtion" />
          </ul>

          {/* mobile menu */}
          <span className="mobile__menu" onClick={handleNavClick}>
            <i
              className={navClicked ? "ri-close-circle-line" : "ri-menu-line"}
            ></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

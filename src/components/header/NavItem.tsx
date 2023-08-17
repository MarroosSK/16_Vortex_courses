import { Link } from "react-router-dom";

const NavItem = ({ title, linkTo }: { title: string; linkTo: string }) => {
  return (
    <li>
      <Link to={linkTo}>{title}</Link>
    </li>
  );
};

export default NavItem;
